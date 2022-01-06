---
layout: null
---


{% assign id = 0 %}
var works = [
  {% for work in site.works %}
    {
      "title": "{{ work.title | escape }}",
      "medium": "{{ work.medium | escape }}",
      "artist": "{{ work.artist | escape }}",
      "notes": "{{ work.notes | strip_html | strip_newlines | escape }}",
      "url": "{{ work.url | escape }}",
      "work-year": "{{ work.work-year | escape }}",
      "id": "{{id}}"
    }{% unless forloop.last %},{% endunless %}
  {% assign id = id | plus: 1 %}{% endfor %}

];
