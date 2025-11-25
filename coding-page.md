---
layout: default
---

# 笔记

<style>
    .category-container {
        margin: 20px 0;
        padding: 10px;
        background: #222;
        border-radius: 5px;
        border: 1px solid #444;
    }
    .category-buttons {
        margin-bottom: 10px;
    }
    .category-btn {
        display: inline-block;
        padding: 5px 12px;
        margin: 5px;
        background: #333;
        color: #ccc;
        border: 1px solid #555;
        border-radius: 3px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    .category-btn:hover {
        background: #444;
        color: #fff;
        border-color: #666;
    }
    .category-btn.active {
        background: #000;
        color: #fff;
        border-color: #000;
        box-shadow: 0 0 5px rgba(255,255,255,0.2);
    }
    .note-list {
        margin-top: 20px;
    }
    .note-item {
        margin: 10px 0;
        padding: 5px 0;
        border-bottom: 1px dashed #444;
    }
    .note-tag {
        display: inline-block;
        padding: 2px 8px;
        margin-left: 10px;
        font-size: 12px;
        color: #ccc;
        background: #333;
        border: 1px solid #555;
        border-radius: 3px;
    }
</style>

<div class="category-container">
    <h3>分类筛选</h3>
    <div class="category-buttons">
        <button class="category-btn active" data-category="all">全部</button>
        <button class="category-btn" data-category="unity">Unity</button>
        <button class="category-btn" data-category="max">3ds Max</button>
        <button class="category-btn" data-category="ui">UI</button>
        <button class="category-btn" data-category="other">其他</button>
    </div>
</div>

<div class="note-list">
    <div class="note-item" data-category="unity">
        <a href="./docs/coding/custom_scene_view_toolbar.html">2025/10/24 Unity Custom Scene View 工具栏 Draw Mode</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="other">
        <a href="./docs/coding/coze_ai_agent.html">2025/10/24 Coze AI Agent 学习</a>
        <span class="note-tag">其他</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/eye_effect.html">2025/10/16 Unity 眼球效果</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/eye_caustic.html">2025/10/10 Unity 眼球焦散调研</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/anime_face_shadow.html">2025/09/25 Untiy 卡通脸部阴影学习</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/unity6_render_graph.html">2025/09/16 Untiy RenderGraph学习</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/water_line.html">2025/09/16 Untiy 吃水线</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="other">
        <a href="./docs/coding/monitor3.html">2022/12/29 示波器 3</a>
        <span class="note-tag">其他</span>
    </div>

    <div class="note-item" data-category="other">
        <a href="./docs/coding/monitor2.html">2022/12/29 示波器 2</a>
        <span class="note-tag">其他</span>
    </div>

    <div class="note-item" data-category="other">
        <a href="./docs/coding/monitor1.html">2022/12/29 示波器 1</a>
        <span class="note-tag">其他</span>
    </div>

    <div class="note-item" data-category="ui">
        <a href="./docs/coding/text_mesh_pro.html">2022/12/22 Untiy UI Text-Mesh-Pro 浮动文字</a>
        <span class="note-tag">UI</span>
    </div>

    <div class="note-item" data-category="ui">
        <a href="./docs/coding/ui_anti_aliasing.html">2022/12/16 Untiy UI 抗锯齿测试</a>
        <span class="note-tag">UI</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/linear_renderer_path.html">2022/09/21 Untiy 利用LineRenderer绘制寻路路径</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/renderfeature_camera_data.html">2021/10/29 Untiy scene & game 屏幕效果相机管理学习</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/shaderGUI.html">2021/09/30 Untiy Shader GUI 学习</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/curve_trans_material.html">2021/09/30 Untiy 曲线数据转贴图传递给材质</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="max">
        <a href="./docs/coding/max_vertexcolor_random.html">2021/08/23 Max maxscript学习记录——顶点色随机</a>
        <span class="note-tag">3ds Max</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/batch_shader_replacement.html">2020/10/15 Unity 批量替换Shader</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/material_transprent_set.html">2020/10/15 Unity 动态修改模型Material实现遮挡半透</a>
        <span class="note-tag">Unity</span>
    </div>

    <div class="note-item" data-category="max">
        <a href="./docs/coding/vertex_animation_baked_to_texture_max.html">2020/10/14 Max 顶点动画烘焙到图</a>
        <span class="note-tag">3ds Max</span>
    </div>

    <div class="note-item" data-category="unity">
        <a href="./docs/coding/tail_smoke.html">2020/04/05 Unity 拖尾烟雾</a>
        <span class="note-tag">Unity</span>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const noteItems = document.querySelectorAll('.note-item');

        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active状态
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // 为当前点击的按钮添加active状态
                this.classList.add('active');

                const category = this.getAttribute('data-category');
                
                // 筛选笔记项
                noteItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
</script>

***

[back](./)
