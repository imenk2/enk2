---
layout: default
---

<div class="linked-headings-container">
  <h1><a href="./coding-page.html">Notes</a></h1>
  <h1><a href="./project-page.html">Project</a></h1>
  <h1><a href="./question-page.html">Question</a></h1>
</div>

***

<h3>最新更新的文章</h3>
<ul>
  {% assign pages_in_docs = site.pages | where_exp: "page", "page.path contains 'docs/'" %}
  {% assign updated_pages = pages_in_docs | where_exp: "page", "page.last_modified_at" | sort: "last_modified_at" | reverse %}
  {% assign regular_pages = pages_in_docs | where_exp: "page", "page.last_modified_at == nil" | sort: "date" | reverse %}
  {% assign all_sorted_pages = updated_pages | concat: regular_pages %}

  {% for page in all_sorted_pages limit:3 %}
    <li>
      <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
      - <small>
        {% if page.last_modified_at %}
          更新于: {{ page.last_modified_at | date: "%Y-%m-%d" }}
        {% else %}
          发布于: {{ page.date | date: "%Y-%m-%d" }}
        {% endif %}
      </small>
    </li>
  {% endfor %}
</ul>

***

<script src="https://utteranc.es/client.js"
        repo="imenk2/enk2"
        issue-term="pathname"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>


<div class="visitor-count">
  <p>总访问量: <span id="count">加载中...</span></p>
</div>


<script>
  // 使用CountAPI实现访客计数
  const counterElement = document.getElementById('count');
  const namespace = 'enk2';
  const key = 'visitors';
  
  // 尝试从本地存储获取计数，减少API调用
  const storedCount = localStorage.getItem('visitorCount');
  if (storedCount) {
    counterElement.textContent = storedCount;
  }
  
  // 调用CountAPI增加计数并获取最新值
  fetch(`https://api.countapi.xyz/update/${namespace}/${key}/?amount=1`)
    .then(response => response.json())
    .then(data => {
      const newCount = data.value;
      counterElement.textContent = newCount;
      // 存储到本地存储
      localStorage.setItem('visitorCount', newCount);
    })
    .catch(error => {
      console.error('Error fetching visitor count:', error);
      // 出错时使用本地存储的值或默认值
      if (!storedCount) {
        counterElement.textContent = '1';
      }
    });
</script>
