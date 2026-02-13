---
layout: default

title: 卡通渲染面部形变
date: 2025-11-28
last_modified_at: 2025-11-28
---

# 卡通渲染面部形变


***
起因是看到MuRo_CG分享的

![](../../assets/img/anime_face_deformation/GIF%202025-11-27%2011-32-55.gif)

他应该是用blendShape做的，想尝试顶点变换是否可行。

<div style="display: flex; justify-content: left; align-items: flex-start; gap: 10px;">

    <!-- 左边的图+文 -->
    <div style="width: 38%; text-align: center;">
        <img src="../../assets/img/anime_face_deformation/item_02.png" style="width: 100%; border-radius: 5px;" alt="图1">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">理想目标</div>
    </div>

    <!-- 右边的图+文 -->
    <div style="width: 25%; text-align: center;">
        <img src="../../assets/img/anime_face_deformation/GIF 2025-11-27 11-46-20.gif" style="width: 100%; border-radius: 5px;" alt="图2">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">现实</div>
    </div>

</div>



一个严重的问题是，俯仰视角下的嘴部回正非常突兀（原作者埋坑，他不展示是有原因的），引起的原因是我的方案最初使用视角钳制有效范围生成由正脸到侧脸的权重（0-1-0）过程。这也带上了俯仰方位的变化，在临界值附近尤为明显。

## 方案

修改的地方在于排除掉了View向量的Y轴影响。取的是View在XZ上的投影长度作垂直权重，使用View计算的横向弧度计算描述一个0°->45°->90°的横向变化权重(背面看不见，不影响结果或者使用完整的2PI区间)。

angle = H * V * θ

最后让遮罩范围内的顶点绕目标轴旋(口内)转即可

![](../../assets/img/anime_face_deformation/GIF 2025-11-27 14-34-39.gif){:width="20%"}

**最后是对比效果**

<div style="display: flex; justify-content: left; align-items: flex-start; gap: 10px;">

    <!-- 左边的图+文 -->
    <div style="width: 25%; text-align: center;">
        <img src="../../assets/img/anime_face_deformation/GIF 2025-11-27 14-53-05.gif" style="width: 100%; border-radius: 5px;" alt="图1">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">原始</div>
    </div>

    <!-- 右边的图+文 -->
    <div style="width: 25%; text-align: center;">
        <img src="../../assets/img/anime_face_deformation/GIF 2025-11-27 14-53-38.gif" style="width: 100%; border-radius: 5px;" alt="图2">
        <div style="color: #666; font-size: 14px; margin-top: 4px;">修改</div>
    </div>

</div>


## 可能的问题

因为没有修改顶点法线，光照？

口腔内牙齿、舌头可能穿模？

***

[back](../../coding-page.html)