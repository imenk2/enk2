---
layout: default

title: Untiy 动态体积烟雾效果
date: 2025-11-26
last_modified_at: 2025-11-26
---

# 动态体积烟雾效果

***
![Branching](../../assets/img/dynamic_volume_smoke/GIF 2025-11-20 17-39-34.gif)

当使用距离场信息描述体积烟雾形状的时候发现，如果图素信息不是SDF，而是一个密度信息，那么这个密度就可以被映射为一个灰阶变化的梯度（灵感来源卡通脸部SDF阴影）。

这里使用Blender几何节点制作一个模型烟雾动态效果，然后将这个动画模型保存为abc格式导入到unity中，在unity里烘焙这个动画每帧SDF信息，根据帧序基于start-end的权重映射（0-1），这样就得到了带有梯度变化的体积烟雾描述的信息内容。

测试纹理为32x32x32（0.5mb），生长过程完成后，可以叠加其他动态噪声让烟雾真正的动起来。

这个方案youtube上其实早就有人实现了类似的结果，对方优化的更加彻底。

[Unity Volumetric Explosions](https://www.youtube.com/watch?v=Qn7XZ9bMpYo)

***

[back](../../coding-page.html)