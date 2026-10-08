(() => {
  'use strict';
  // Run synchronously in <head>, before anchors or content can be painted.
  const navigation = performance.getEntriesByType('navigation')[0];
  const reloading = navigation ? navigation.type === 'reload' : performance.navigation?.type === 1;
  if (!reloading) return;
  const previous = history.scrollRestoration;
  history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(history.state, '', location.pathname + location.search);
  window.scrollTo({ top: 0, behavior: 'instant' });
  window.addEventListener('pageshow', () => window.scrollTo({ top: 0, behavior: 'instant' }), { once: true });
  // Keep reload restoration disabled through startup; restore normal history
  // behavior on first interaction or before leaving (including BFCache).
  const events = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'pagehide'];
  function restoreHistory() {
    history.scrollRestoration = previous;
    for (const event of events) window.removeEventListener(event, restoreHistory);
  }
  for (const event of events) window.addEventListener(event, restoreHistory, { once: true, passive: true });
})();
