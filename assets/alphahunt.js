/* alphahunt.ing — the only behaviour on the page: the compact menu.
   The menu is a <details>, so it opens and closes with this script blocked;
   this only closes it after a link is chosen, on Escape, on an outside click,
   and when the window grows past the breakpoint. */
(function () {
  var menu = document.querySelector('[data-menu]');
  if (!menu) return;
  function close() { menu.open = false; }
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) { close(); menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', function (e) { if (menu.open && !menu.contains(e.target)) close(); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1080) close(); });
})();
