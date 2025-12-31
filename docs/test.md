---
layout: default
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```

_yay_

### 公式
$$
n= \frac{\frac{(n1+n2)}{2}}{|\frac{(n1 + n2)}{2}|} = (\frac{\frac{(x1+x2)}{2}}{len},\frac{\frac{(y1+y2)}{2}}{len},\frac{\frac{(z1+z2)}{2}}{len})
$$


## 可点开放大的图片1
{% include image-lightbox.html url="/assets/img/render_graph/image3.png" title="core sample" %}
//可点开放大的图片2
[![Branching](../../assets/img/render_graph/image3.png)](../../assets/img/render_graph/image3.png){:target="_blank" rel="noopener noreferrer"}

## 带大小调整的图片
<img src="/assets/images/example.jpg" alt="示例图片" width="50%"/>
<img src="/assets/images/example.jpg" width="200" height="200"/>
![我的图片](/assets/img/photo.jpg){: width="50%" }

## 带大小调整的图片间隔距离去除
![我的图片1](/assets/img/photo.jpg){: width="50%" .left} ![我的图片1](/assets/img/photo.jpg){: width="50%" .right}

## 带说明文字的图片
<div style="display: flex; justify-content: center; align-items: flex-start; gap: 10px;">

    <!-- 左边的图+文 -->
    <div style="width: 45%; text-align: center;">
        <img src="/assets/img/1.jpg" style="width: 100%; border-radius: 5px;" alt="图1">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">图1说明文字</div>
    </div>

    <!-- 右边的图+文 -->
    <div style="width: 45%; text-align: center;">
        <img src="/assets/img/2.jpg" style="width: 100%; border-radius: 5px;" alt="图2">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">图2说明文字</div>
    </div>

</div>

<table style="width: auto; margin: 0 auto; border: none;">
  <tr style="border: none;">
    <!-- padding: 5px 文字中心对齐，垂直顶部对齐 -->
    <td style="padding: 5px; border: none; text-align: center;vertical-align: top;">
      <img src="/assets/img/1.jpg" width="200" /><br>
      <small>图1说明</small>
    </td>
    <td style="padding: 5px; border: none; text-align: center;vertical-align: top;">
      <img src="/assets/img/2.jpg" width="200" /><br>
      <small>图2说明</small>
    </td>
  </tr>
</table>



## 超链接
[参考](https://www.zhihu.com/question/263561970/answer/273922231)

[back](../coding-page.html)