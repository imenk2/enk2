---
layout: default
---

# 记录遇到的问题

***

{% assign question_pages = site.pages | where_exp: "p", "p.path contains 'docs/question/'" %}
{% assign sorted_q = question_pages | sort: "last_modified_at" | reverse %}
{% for p in sorted_q %}
[{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}
