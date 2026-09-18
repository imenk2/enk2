---
layout: default
---

<script src="./assets/js/category-filter.js"></script>
<script>
    initCategoryFilter();
</script>

<link rel="stylesheet" href="./assets/css/category-filter.css">

# 笔记

<div class="category-container">
    <h3>分类筛选</h3>
    <div class="category-buttons">
        <button class="category-btn active" data-category="all">全部</button>
        <button class="category-btn" data-category="unity">Unity</button>
        <button class="category-btn" data-category="unity tool">Unity Tool</button>
        <button class="category-btn" data-category="unity ui">Unity UI</button>
        <button class="category-btn" data-category="max">3ds Max</button>
        <button class="category-btn" data-category="study">Study</button>
        <button class="category-btn" data-category="other">Other</button>
    </div>
</div>

<div class="note-list">
    {% assign coding_pages = site.pages | where_exp: "p", "p.path contains 'docs/coding/'" %}
    {% assign sorted_pages = coding_pages | sort: "last_modified_at" | reverse %}
    {% for p in sorted_pages %}
    <div class="note-item" data-category="{{ p.category | default: 'other' }}">
        <a href="{{ p.url | relative_url }}">{{ p.last_modified_at | date: "%Y/%m/%d" }} {{ p.title }}</a>
        <span class="note-tag">{% case p.category %}{% when 'unity' %}Unity{% when 'unity tool' %}Unity Tool{% when 'unity ui' %}Unity UI{% when 'max' %}3ds Max{% when 'study' %}Study{% else %}Other{% endcase %}</span>
    </div>
    {% endfor %}
</div>
