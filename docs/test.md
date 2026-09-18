---
layout: default
---

# Markdown 格式模板

本文件为写作格式参考，不会出现在文章列表中。

## 文字样式

**粗体**、_斜体_、~~删除线~~、`行内代码`、***粗斜体***

## 标题层级

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 引用块

> 这是一段引用。
>
> 引用可以有多段，也可以嵌套：
>
> > 这是嵌套引用。

## 列表

### 无序列表

- 项目一
- 项目二
- 项目三

### 有序列表

1. 第一项
2. 第二项
3. 第三项

### 嵌套列表

- 一级项目
  - 二级项目
  - 二级项目
    - 三级项目
- 一级项目

### 任务列表

- [x] 已完成
- [ ] 未完成
- [ ] 未完成

## 代码块

```glsl
// GLSL 代码
float3 normal = normalize(cross(dPdx, dPdy));
```

```csharp
// C# 代码
public static float Clamp(float v, float min, float max) {
    return Math.Max(min, Math.Min(max, v));
}
```

```
无语言标记的代码块
```

行内代码：`int x = 0;`

## 表格

| 参数 | 类型 | 说明 |
|:-----|:----:|----:|
| alpha | float | 左对齐 |
| beta  | int   | 居中 |
| gamma | bool  | 右对齐 |

## 分隔线

***

## 超链接

[普通链接](https://www.zhihu.com/question/263561970/answer/273922231)

[带标题的链接](https://github.com "鼠标悬停显示")

直接URL：<https://github.com>

## 图片

### 基本图片

![图片说明](/assets/img/photo.jpg)

### 指定大小

<img src="/assets/img/photo.jpg" width="50%"/>

![指定宽度](/assets/img/photo.jpg){: width="50%" }

### 可点击放大的图片（lightbox）

{% include image-lightbox.html url="/assets/img/render_graph/image3.png" title="示例图片" %}

[![缩略图](../../assets/img/render_graph/image3.png)](../../assets/img/render_graph/image3.png){:target="_blank" rel="noopener noreferrer"}

### 并排图片带说明文字

<div style="display: flex; justify-content: center; align-items: flex-start; gap: 10px;">
    <div style="width: 45%; text-align: center;">
        <img src="/assets/img/1.jpg" style="width: 100%; border-radius: 5px;" alt="图1">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">图1说明</div>
    </div>
    <div style="width: 45%; text-align: center;">
        <img src="/assets/img/2.jpg" style="width: 100%; border-radius: 5px;" alt="图2">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">图2说明</div>
    </div>
</div>

### 表格布局并排图片

<table style="width: auto; margin: 0 auto; border: none;">
  <tr style="border: none;">
    <td style="padding: 5px; border: none; text-align: center; vertical-align: top;">
      <img src="/assets/img/1.jpg" width="200" /><br>
      <small>图1说明</small>
    </td>
    <td style="padding: 5px; border: none; text-align: center; vertical-align: top;">
      <img src="/assets/img/2.jpg" width="200" /><br>
      <small>图2说明</small>
    </td>
  </tr>
</table>

## 数学公式

$$
n = \frac{\frac{n_1 + n_2}{2}}{\left|\frac{n_1 + n_2}{2}\right|}
$$

行内公式 $E = mc^2$ 也可以。

## HTML 内嵌

<mark>高亮文字</mark>

<kbd>Ctrl</kbd> + <kbd>S</kbd> 保存

<sub>下标</sub> H<sub>2</sub>O

<sup>上标</sup> x<sup>2</sup>

## 定义列表

<dl>
<dt>术语</dt>
<dd>定义内容</dd>
<dt>另一个术语</dt>
<dd>另一个定义</dd>
</dl>

## 脚注

这里有一个脚注[^1]。

[^1]: 脚注的详细内容。

## 注意事项

- 文章 front matter 只需写 `category: 分类名`（可选），title/date/layout/last_modified_at 均自动填充
- title 从正文第一个 `# 标题` 提取
- 新文章自动出现在列表最上方（按修改时间排序）
- 可用分类：`unity` / `unity tool` / `unity ui` / `max` / `study` / `other`
- 返回按钮由布局自动注入，无需手写
- 代码块默认折叠，点击展开

### 文章 front matter 示例

```
---
category: unity
---
```

不写 category 则默认归为 `other`。
