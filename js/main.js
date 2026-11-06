(function () {
  'use strict';

  // Iconos de trazo (24x24, estilo Feather/Lucide, licencia MIT).
  var icons = {
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function iconNode(name) {
    var wrap = el('span', 'chip');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
      'stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false">' +
      (icons[name] || '') + '</svg>';
    return wrap;
  }

  var links = (window.SITE && window.SITE.links) || [];
  var list = document.getElementById('links');

  if (list) {
    links.forEach(function (item) {
      var li = el('li');
      var a = el('a', 'link' + (item.primary ? ' primary' : ''));
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      var body = el('span', 'body');
      body.appendChild(el('span', 't', item.title));
      body.appendChild(el('span', 'a', item.detail));
      body.appendChild(el('span', 'sr-only', ' (se abre en una pestaña nueva)'));

      var arrow = el('span', 'arr', '↗');
      arrow.setAttribute('aria-hidden', 'true');

      a.appendChild(iconNode(item.icon));
      a.appendChild(body);
      a.appendChild(arrow);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // El botón principal del inicio apunta al enlace marcado como primary.
  var primary = links.filter(function (l) { return l.primary; })[0];
  var cta = document.getElementById('cta-principal');
  if (primary && cta) {
    cta.href = primary.url;
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
  }

  var year = document.getElementById('anio');
  if (year) year.textContent = new Date().getFullYear();

  // Aparición suave de secciones al hacer scroll (se omite con reduced motion).
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var blocks = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    blocks.forEach(function (b) { b.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    blocks.forEach(function (b) { io.observe(b); });
  }
})();
