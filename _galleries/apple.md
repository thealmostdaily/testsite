---
title: apple
layout: default
---

<h2>The {{ page.title }} gallery</h2>


<ul class="list pl0 lh">

  {% assign projects = site.new | where: "galleries", "apple" | sort: 'title' %}
  {% for item in projects %}

      <li class="dib mr2"><a href="{{ item.url }}" class="f4 f3-ns db pb2 pr2 link dim blue">{{ item.title }}</a></li>

  {% endfor %}
</ul>
