---
title: apple
layout: default
---
<h2>The {{ page.title }} gallery</h2>


<ul class="list pl0 lh">

  {% assign projects = site.works | where: "galleries", "apple" | sort: 'title' %}
  {% for item in projects %}

      <li class="dib mr2"><a href="{{ item.url }}" class="f4 f3-ns db pb2 pr2 link dim blue">{{ item.title }}</a></li>

  {% endfor %}
</ul>

<div class="cf pv2 w-80 center">

{% assign mid = site.works | sort: 'year' | where: "galleries", "apple"%}
{% assign projects = mid | reverse %}

<!-- sorts work dates into reverse order so most recent appears first -->

  {% for item in projects %}

  <div class="fl w-50 w-third-m w-20-l pv2 pr4 ">
  <a href="{{ item.url }}" class="db link dim tl">
    <div class="aspect-ratio aspect-ratio--1x1 bg-white">
      <!-- <img src="works/{{ item.thumb }}"  class="aspect-ratio--object"> -->
      <img style="background-image:url(works/{{ item.thumb }});"
        class="db bg-center cover aspect-ratio--object" />
    </div>
      <dl class="mt2 f6 lh-copy">
        <dt class="clip">Title</dt>
        <dd class="ml0 black truncate w-100">{{ item.title }}</dd>
        <dt class="clip">Year</dt>
        <dd class="ml0 gray truncate w-100">{{ item.year }}</dd>
      </dl>
  </a>
</div>
  {% endfor %}

</div>
