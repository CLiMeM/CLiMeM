/**
 * Shared behavior: mobile nav, FAQ accordion, scroll.
 */
(function () {
  'use strict';

  // Mobile nav: toggle open state when nav list is toggled
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('nav-toggle');
    var navInner = document.getElementById('site-nav-inner');
    if (toggle && navInner) {
      var ul = navInner.querySelector('.nav-list');
      if (ul) {
        toggle.addEventListener('click', function () {
          var open = ul.classList.toggle('open');
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      }
    }

    // FAQ accordion (event delegation so it works when FAQ list is injected by inline script)
    var faqList = document.getElementById('faq-list');
    if (faqList) {
      faqList.addEventListener('click', function (e) {
        var btn = e.target.closest('.faq-q');
        if (!btn) return;
        var item = btn.closest('.faq-item');
        if (!item) return;
        var panel = item.querySelector('.faq-a');
        if (!panel) return;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function (other) {
          other.classList.remove('open');
          var p = other.querySelector('.faq-a');
          var b = other.querySelector('.faq-q');
          if (p) p.hidden = true;
          if (b) b.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }

    // Close mobile nav on link click (same page)
    var navLinks = document.querySelectorAll('.site-nav a[href]');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var href = link.getAttribute('href') || '';
        if (href.indexOf('#') === 0 || (href.indexOf('index.html') !== -1 && window.location.pathname.replace(/\/$/, '').endsWith('index'))) {
          var ul = document.querySelector('.site-nav ul');
          if (ul && ul.classList.contains('open')) {
            ul.classList.remove('open');
            var t = document.getElementById('nav-toggle');
            if (t) t.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  });
})();
