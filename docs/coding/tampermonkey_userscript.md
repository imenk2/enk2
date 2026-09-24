---
category: study
---
-

***

# 油猴插件学习记录

>刷zh的时候推荐流里夹了一堆情感问答和人生感悟，技术内容反而被淹没。想着能不能把非技术文章直接折叠掉，于是折腾了一阵油猴插件，写了个zh文章屏蔽器。这篇文章把从认识到实现的过程记一下，免得下次再忘。

## 什么是油猴插件

油猴是一类浏览器扩展的统称，常见的是 Tampermonkey 和 Violentmonkey。它本身不做事，只负责加载和运行你写的「用户脚本（userscript）」。用户脚本就是一段普通的 JavaScript，带一段特殊的头部声明，告诉油猴这个脚本叫什么、要在哪些网址生效、需要哪些权限。

和直接写浏览器扩展相比，用户脚本的好处是轻量：不用打包、不用签名、不用上架商店，写完一个 `.user.js` 文件装进油猴就能跑。代价是权限受油猴管控，能调用的 API 都是油猴提供的 `GM_*` 系列。

装一个 Tampermonkey，在管理面板里新建脚本，把下面这段贴进去保存，打开任意网页就能在控制台看到输出。

```javascript
// ==UserScript==
// @name         hello
// @match        *://*/*
// @grant        none
// ==/UserScript==

console.log('userscript running');
```

## 脚本头部 Metadata

头部的 `// ==UserScript==` 和 `// ==/UserScript==` 之间是元数据，每行一个 `@字段 值`。常用的几个：

- `@name` 脚本名，显示在油猴管理面板里
- `@namespace` 命名空间，一般填仓库地址，用来区分同名脚本
- `@version` 版本号，油猴靠它判断要不要更新，**改了脚本一定要自增**，否则不会触发更新
- `@match` 生效的网址，支持通配，比如 `https://www.zhihu.com/*`
- `@grant` 声明要用的 GM API，比如 `GM_setValue`、`GM_xmlhttpRequest`，不用就写 `none`
- `@connect` 用 `GM_xmlhttpRequest` 请求跨域时要声明目标域名，否则会被拦
- `@run-at` 脚本注入时机，`document-end` 是默认，`document-start` 更早

`@grant` 是关键。每用一个 `GM_*` API 就得在这里声明，漏了直接报错或拿不到值。

## 实战：zh文章屏蔽器

需求很直白：在zh首页、热榜、专栏广场、圈子动态这几个页面，把非技术文章折叠成一个低存在感的灰色条，技术文章正常显示。用户能自己加屏蔽关键字、作者、领域，也能从远程拉一份规则合并进来。

### 先摸清页面的 DOM 结构

写选择器之前得先知道页面长什么样。以zh首页为例：

1. 打开目标页面，按 `F12` 打开 DevTools，切到 Elements 面板
2. 点面板左上角的元素选择器图标（或按 `Ctrl+Shift+C`），鼠标在页面上悬停会高亮对应的 DOM 节点，单击选中
3. Elements 里高亮的那行就是目标节点，展开看它的 class、`data-*` 属性和上下几层父级
4. 挑选择器时优先用语义化的 class 或 data 属性，避开带 hash 的编译类名（像 `css-1a2b3c` 这种，前端一更新就变）
5. 右键节点 → Copy → Copy selector 能拿到一条完整路径，但通常又长又脆，手动往上找一个最近的可复用锚点再简化
6. 切到 Console，用 `document.querySelectorAll('你的选择器')` 验证，看返回的 length 和元素是不是预期的
7. 滚动页面看新加载的卡片是不是同一套结构，结构不一样就得多写几套选择器兜底
8. 动态加载的节点不会一开始就出现在 DOM 里，所以不能只靠一次 `querySelectorAll`，得配合 MutationObserver 持续监听新节点

>zh的卡片上带 `data-zop` 属性，里面是序列化的文章元信息，比 class 稳定得多，优先拿这种 data 属性做锚点。

### 扫描页面卡片

zh的推荐流是动态加载的，卡片一个个冒出来，不能只扫一次。用 `MutationObserver` 监听 DOM 变化，有新节点就过一遍：

```javascript
const observer = new MutationObserver(() => scanCards());
observer.observe(document.body, { childList: true, subtree: true });
```

`scanCards` 拿一组选择器匹配所有文章卡，对每张卡提取标题、作者、领域，然后判定。这里有个坑：卡片刚出现时标题有了，但作者的领域徽章可能还没渲染完，`info.fields` 拿到空数组。解决办法是判定放行后给卡片打个 `passed` 标记，后续 observer 再触发时只补注入按钮、不重新判定，等徽章渲染好再补上领域提示。

### 判定一篇文章是不是技术文章

最早想着把标题和摘要拼起来一起匹配，结果摘要里很容易误杀——一篇技术文章的摘要里提到「如何评价」也会被当非技术屏蔽掉。后来改成**只看标题**：

```javascript
function classifyArticle(info) {
  const { title, author } = info;
  const text = title || '';
  // 命中技术白名单 -> 放行
  // 命中非技术黑名单/作者黑名单 -> 屏蔽
  // 否则按默认策略
}
```

判定顺序是：作者黑名单 → 技术白名单（命中放行）→ 非技术黑名单 → 标题黑名单。白名单和黑名单都命中时算冲突，显示一个黄色横条让用户一键消冲突。

非技术标题的识别除了关键字，还用了一组正则引导词，覆盖「怎么评价」「为何会」「你这一生」这类发问式和情感式句式。这组正则放在远程规则文件里，方便随时调，不用改脚本。

### 屏蔽与折叠

判定为非技术的卡片不直接删 DOM，而是把它折叠成一个矮的灰色条，点一下能展开看原文。这样误判了还能找回来，比直接 `display:none` 安全。

折叠时只 toggle 自己加的 `ztf-collapsed` 类，不要去动zh原生的 `is-collapsed`，也不要模拟点击「阅读全文」——那种依赖zh内部状态的写法，zh前端一更新就回归了。

### 配置面板与本地存储

油猴给了 `GM_setValue` / `GM_getValue` 做持久化，按脚本隔离，不用操心 localStorage 的域名问题。配置面板就是个注入的浮层，里面几个 textarea 分别绑 `techKeywords`、`nonTechKeywords`、`techAuthors`、`nonTechAuthors`，保存时写回 `config` 再全量重扫一遍。

```javascript
GM_setValue('ztf_config', config);
```

### 远程规则同步

规则越加越多，全塞进脚本里每次改都要发新版，太笨。于是把完整规则单独放一个 `rules.json` 存进 git 仓库，脚本启动时拉过来合并。拉取用 `GM_xmlhttpRequest`：

```javascript
GM_xmlhttpRequest({
  method: 'GET',
  url: url,
  onload: (resp) => {
    const rules = JSON.parse(resp.responseText);
    mergeRemoteRules(rules);
  }
});
```

`raw.githubusercontent.com` 国内经常被墙，而油猴的 `GM_xmlhttpRequest` 不走系统代理，所以主源换成 jsdelivr 的 CDN 镜像，raw 留作 fallback，逐个尝试。合并策略是**只加不删**——远程有的本地没有就加进来，本地自己删的不会被远程覆盖回去，这样用户的自定义不会被冲掉。

自动同步设了 6 小时一次，距离上次同步不够时间就跳过，避免每次开页面都请求。手动同步在配置面板放了个按钮，绕过时间限制强制拉。

### 油猴菜单命令

`GM_registerMenuCommand` 能在油猴图标右键菜单里加一项，点一下执行回调。适合放「打开配置面板」「立即同步规则」「重新扫描」这种低频但有用的入口。

```javascript
GM_registerMenuCommand('同步远程规则', () => { /* ... */ });
```

## 踩过的坑

### CDN 缓存

jsdelivr 对 GitHub 内容有大约 12 小时的边缘缓存。改了 `rules.json` 推上去，脚本拉到的还是旧版本。推送后要调一下 purge 接口主动清缓存：

```
https://purge.jsdelivr.net/gh/用户/仓库@分支/文件
```

GET 一下就行，返回里会告诉你 Cloudflare 和 Fastly 两个边缘节点是否刷新成功。

### 本地 HTTP 缓存

清了 CDN 边缘缓存还不够。`GM_xmlhttpRequest` 走的是浏览器 HTTP 缓存那一层，jsdelivr 的响应带长 `Cache-Control`，浏览器本地会缓存一份旧的。purge 管不到用户端本地缓存，脚本照样命中旧响应。

解决办法是给请求 URL 加个时间戳 cache-buster，每次都当成不同的 URL，绕过本地缓存：

```javascript
const url = REMOTE_RULES_URLS[idx++] + '?_=' + Date.now();
```

代价是 CDN 缓存收益没了，每次同步都真请求一次。同步是低频操作，可以接受。

### DOM 延迟加载

前面提过，卡片 DOM 是分批渲染的。第一次扫的时候标题在、领域徽章不在，判定完放行就走了。等徽章渲染好，observer 又触发一次，如果这时候重新判定，可能因为某些时序问题把已经放行的卡片又屏蔽掉。给判定过的卡片打状态标记，后续只补注入、不重判，能省掉一大类时序 bug。

### MutationObserver 频繁触发

滚动加载时 observer 会高频触发，每次都全量扫描很卡。加个简单防抖，把多次触发合并成一次扫描就行。

## 小结

油猴插件适合做这种「在别人网站上贴一层自己的逻辑」的小需求，不用走浏览器扩展那套打包流程。核心就是头部 metadata 声明权限、`GM_*` API 做存储和网络、`MutationObserver` 跟动态 DOM。真正费时间的是各种时序和缓存坑——DOM 没渲染完、CDN 缓存旧版本、本地 HTTP 缓存更旧版本，每一个都得单独处理。规则和脚本拆开存，用 CDN 分发，改规则不用发新版，这个拆法后期维护省心很多。