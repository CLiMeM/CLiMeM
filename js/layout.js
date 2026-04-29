/**
 * Renders shared header, nav, and footer from workshop object.
 * Expects window.workshop (from data/workshop.js, built from src/content/workshop.ts).
 */
(function () {
  if (typeof window.workshop === 'undefined') return;

  var w = window.workshop;
  var name = w.workshopName || 'CLiMeM';
  var year = w.year || '2026';
  var tagline = w.tagline || '';

  function currentPage() {
    var path = window.location.pathname;
    var base = path.split('/').pop() || 'index.html';
    return base.replace(/\.html$/, '') || 'index';
  }

  function escapeHtml(s) {
    if (s == null) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderHeader(container) {
    if (!container) return;
    container.innerHTML =
      '<a href="index.html" class="site-logo">' +
      '<img src="images/climem_logo.png" alt="" class="site-logo-img">' +
      '<span class="site-logo-text">' + escapeHtml(name) + ' ' + escapeHtml(year) + '</span>' +
      '</a>' +
      '<div class="site-header-right" aria-label="MICCAI 2026 logo">' +
      '<img src="images/miccai_logo_updated.png" alt="MICCAI 2026" class="site-miccai-img">' +
      '</div>';
  }

  function renderNav(container) {
    if (!container) return;
    var current = currentPage();
    var items = (w.nav || []).map(function (item) {
      var isCurrent = (item.href && (item.href.replace(/\.html$/, '') || 'index') === current);
      var attr = isCurrent ? ' aria-current="page"' : '';
      return '<li><a href="' + escapeHtml(item.href) + '"' + attr + '>' + escapeHtml(item.label) + '</a></li>';
    }).join('');
    container.innerHTML = '<ul class="nav-list">' + items + '</ul>';
  }

  function renderFooter(container) {
    if (!container) return;
    var links = (w.nav || []).slice(0, 5).map(function (item) {
      return '<a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.label) + '</a>';
    }).join('');
    container.innerHTML =
      '<p class="footer-brand">' + escapeHtml(name) + ' ' + escapeHtml(year) + (tagline ? ' — ' + escapeHtml(tagline) : '') + '</p>' +
      '<nav class="footer-links">' + links + '</nav>' +
      '<p class="footer-copy">&copy; ' + escapeHtml(year) + ' ' + escapeHtml(name) + ' Workshop. All rights reserved.</p>';
  }

  function run() {
    var skip = document.getElementById('skip-link');
    if (!skip) {
      skip = document.createElement('a');
      skip.id = 'skip-link';
      skip.className = 'visually-hidden';
      skip.setAttribute('href', '#main-content');
      skip.textContent = 'Skip to main content';
      document.body.insertBefore(skip, document.body.firstChild);
    }
    skip.setAttribute('href', '#main-content');
    renderHeader(document.getElementById('site-header-inner'));
    renderNav(document.getElementById('site-nav-inner'));
    renderFooter(document.getElementById('site-footer-inner'));

    var toggle = document.getElementById('nav-toggle');
    var navList = document.querySelector('.site-nav .nav-list');
    if (toggle && navList) {
      toggle.addEventListener('click', function () {
        var open = navList.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
