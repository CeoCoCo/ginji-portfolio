(() => {
  'use strict';
  const copy = {
    vi: {
      description: 'Ginji (CoCo) — sinh viên Luật, thích game, âm nhạc và những ngày trời âm u.',
      skip: 'Đến nội dung chính', navigation: 'Điều hướng chính',
      heroLead: 'Hewwooo, mình là Ginji. Một “con céo” chill chill thích đi ngẩu. Chào mừng bạn đến với profile của mình nheee~',
      navAbout: 'Về mình', navFursona: 'Fursona', navGallery: 'Thư viện',
      introAlt: 'Ginji, chiếc cáo trắng xanh với nụ cười tinh nghịch.', socialNav: 'Mạng xã hội', newTab: 'mở trong tab mới', fursonaLabel: 'FURSONA', galleryLabel: 'THƯ VIỆN',
      aboutLabel: 'VỀ MÌNH', aboutHeadline1: 'Hơi ít nói lúc đầu.', aboutHeadline2: 'Thân rồi thì… để xem.',
      aboutP1: 'Bạn có thể gọi mình là Ginji, CoCo hoặc Ceo. Hiện tại mình đang học Luật, còn ngoài giờ học thì thường tìm đến game, âm nhạc và những khoảng thời gian được thảnh thơi một chút.',
      aboutP2: 'Mình khá dễ tính, chỉ hơi thụ động khi bắt chuyện thôi. Nếu muốn làm quen, cứ chủ động chào mình nhé.',
      tagShy: 'Thân thiện, hơi rụt rè', tagWeather: 'Thích trời âm u', tagJapanese: 'Đang học tiếng Nhật',
      interestsTitle: 'Mấy điều mình thích.', interestsLabel: 'NGOÀI GIỜ HỌC',
      gameTitle: 'Thêm một ván nữa.', gameText: 'Từ game âm nhạc đến những trận Guilty Gear Strive. Đôi khi chơi để thử thách bản thân, đôi khi chỉ để chill.', gameMeta: 'Game / Anji Mito',
      musicTitle: 'Nhạc hay, trời âm u.', musicText: 'Một playlist hợp tâm trạng và thời tiết hơi xám một chút. Vậy là đủ cho một khoảng nghỉ mình thích.', musicMeta: 'Âm nhạc / Những phút thảnh thơi',
      japaneseTitle: 'Từng chút tiếng Nhật.', japaneseText: 'Học thêm vài từ, hiểu thêm một câu. Mình thích cảm giác dần chạm đến một ngôn ngữ khác.', japaneseMeta: 'Ngôn ngữ / Từng bước nhỏ',
      fursonaHeadline: 'Ginji, phiên bản kitsune.',
      fursonaText: 'Một chiếc cáo với bộ lông trắng, những mảng xanh băng và điểm nhấn tím chàm. Ginji thường xuất hiện với hai chiếc đuôi — một phiên bản khác của mình trong thế giới furry.',
      fursonaTails: 'Thường xuất hiện với 2 đuôi', fursonaMood: 'Chill & hơi rụt rè',
      paletteLabel: 'Bảng màu của Ginji', snow: 'Trắng tuyết', ice: 'Xanh băng', blueGrey: 'Xanh xám', indigo: 'Tím chàm', lavender: 'Tím nhạt',
      galleryTitle: 'Một chút về thế giới của Ginji.', refCaption: 'Refsheet nhân vật', refView: 'Xem ảnh đầy đủ',
      refOpen: 'Mở refsheet Ginji đầy đủ trong tab mới', refAltA: 'Refsheet Ginji: kitsune trắng và xanh với hai đuôi, góc nhìn trước, sau và các chi tiết thiết kế.',
      refViewer: 'Refsheet Ginji', refSelector: 'Chọn refsheet', refAltB: 'Refsheet Ginji B: cáo trắng xanh với nhiều đuôi, bảng màu và các biểu cảm đeo kính.', refUnavailable: 'Ảnh này chưa khả dụng. Vẫn hiển thị refsheet hiện tại.', refChanged: 'Đang hiển thị', galleryEmpty: 'Một góc dành cho những artwork sắp tới của Ginji.',
      helloLabel: 'MỘT LỜI CHÀO', helloHeadline: 'Đừng ngại nói',
      helloText: 'Nếu bạn cũng thích game, âm nhạc hay chỉ muốn trò chuyện một chút, có lẽ chúng mình sẽ có chuyện để kể.',
      helloNote: 'Mình có thể hơi chậm mở lời. Nhưng rất vui khi bạn ghé qua.',
      footer: 'Ginji / CoCo — Cứ thoải mái là mình.', footerTop: 'Lên đầu trang ↑', backToTop: 'Về đầu trang',
      languageLabel: 'Hiển thị bằng tiếng Anh', languageHint: 'Switch to English', languageAnnouncement: 'Đã chuyển sang tiếng Việt.',
    },
    en: {
      description: 'Ginji (CoCo) — a law student into games, music and cloudy days.',
      skip: 'Skip to main content', navigation: 'Main navigation',
      heroLead: 'Hewwooo, I’m Ginji — a chill lil fox who loves wandering around. Welcome to my profileee~',
      navAbout: 'About Me', navFursona: 'Fursona', navGallery: 'Gallery',
      introAlt: 'Ginji, a white and blue fox with a playful smile.', socialNav: 'Social links', newTab: 'opens in a new tab', fursonaLabel: 'FURSONA', galleryLabel: 'GALLERY',
      aboutLabel: 'ABOUT ME', aboutHeadline1: 'A little quiet at first.', aboutHeadline2: 'Once we’re friends… we’ll see.',
      aboutP1: 'You can call me Ginji, CoCo or Ceo. I’m currently studying law. Outside of class, you’ll usually find me playing games, listening to music or just taking things slow.',
      aboutP2: 'I’m pretty easygoing, just not always the first to start a conversation. Feel free to say hi if you’d like to get to know me.',
      tagShy: 'Friendly, but shy', tagWeather: 'Cloudy-day enjoyer', tagJapanese: 'Learning Japanese',
      interestsTitle: 'A few things I like.', interestsLabel: 'OUTSIDE OF CLASS',
      gameTitle: 'Just one more round.', gameText: 'From rhythm games to Guilty Gear Strive matches. Sometimes I’m up for a challenge; sometimes I just want to chill.', gameMeta: 'Games / Anji Mito',
      musicTitle: 'Good music, grey skies.', musicText: 'A playlist that fits the mood and a slightly overcast sky. That’s my kind of little break.', musicMeta: 'Music / Slow moments',
      japaneseTitle: 'Japanese, bit by bit.', japaneseText: 'A few more words, one more sentence understood. I like the feeling of slowly finding my way into another language.', japaneseMeta: 'Language / Small steps',
      fursonaHeadline: 'Ginji, the kitsune version.',
      fursonaText: 'A fox with snowy white fur, icy blue markings and indigo accents. Ginji usually appears with two tails — another version of me in the furry world.',
      fursonaTails: 'Usually seen with 2 tails', fursonaMood: 'Chill & a little shy',
      paletteLabel: 'Ginji’s colour palette', snow: 'Snow white', ice: 'Ice blue', blueGrey: 'Blue grey', indigo: 'Indigo', lavender: 'Lavender',
      galleryTitle: 'A little of Ginji’s world.', refCaption: 'Character reference sheet', refView: 'View full image',
      refOpen: 'Open Ginji’s full reference sheet in a new tab', refAltA: 'Ginji reference sheet: a white and blue kitsune with two tails, front and back views, and character design details.',
      refViewer: 'Ginji reference sheets', refSelector: 'Choose a reference sheet', refAltB: 'Ginji reference sheet B: a white and blue fox with multiple tails, a colour palette and expressions wearing glasses.', refUnavailable: 'This image is unavailable. Keeping the current reference sheet.', refChanged: 'Showing', galleryEmpty: 'A little space for Ginji’s upcoming artwork.',
      helloLabel: 'A LITTLE HELLO', helloHeadline: 'Feel free to say',
      helloText: 'If you’re into games, music or just a little conversation, we might have a few stories to share.',
      helloNote: 'I might be slow to say the first word. But I’m glad you stopped by.',
      footer: 'Ginji / CoCo — Just being me.', footerTop: 'Back to top ↑', backToTop: 'Back to top',
      languageLabel: 'Display in English', languageHint: 'Chuyển sang tiếng Việt', languageAnnouncement: 'Switched to English.',
    }
  };
  const languageToggle = document.querySelector('.language-toggle');
  const backToTop = document.querySelector('.back-to-top');
  const header = document.querySelector('.site-header');
  const overview = document.getElementById('overview');
  const starLayer = document.querySelector('.starlight');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sectionLinks = Array.from(document.querySelectorAll('.navlinks a'));
  const sections = sectionLinks.map(link => document.querySelector(link.hash));
  const navlinks = document.querySelector('.navlinks');
  const navIndicator = document.querySelector('.nav-indicator');
  let activeLink = null, navigationTarget = null, indicatorFrame = null;
  function updateIndicator() {
    indicatorFrame = null;
    navIndicator.style.width = activeLink ? activeLink.offsetWidth + 'px' : '0px';
    navIndicator.style.transform = 'translateX(' + (activeLink ? activeLink.offsetLeft : 0) + 'px)';
    navIndicator.classList.toggle('is-visible', !!activeLink);
  }
  function scheduleIndicator() {
    if (indicatorFrame === null) indicatorFrame = requestAnimationFrame(updateIndicator);
  }
  function setActiveSection(id) {
    const next = sectionLinks.find(link => link.hash === '#' + id) || null;
    if (next === activeLink) return;
    activeLink = next;
    for (const link of sectionLinks) {
      if (link === activeLink) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduleIndicator();
  }
  if ('ResizeObserver' in window) new ResizeObserver(scheduleIndicator).observe(navlinks);
  if (document.fonts) document.fonts.ready.then(scheduleIndicator);
  let currentLanguage = 'vi', scrollPending = false, scrollRaf = null;
  const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Storage may be blocked. */ } };
  function applyLanguage(lang, announce = false) {
    currentLanguage = lang === 'en' ? 'en' : 'vi';
    const text = copy[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.querySelector('meta[name="description"]').content = text.description;
    for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = text[el.dataset.i18n];
    for (const el of document.querySelectorAll('[data-i18n-aria]')) el.setAttribute('aria-label', text[el.dataset.i18nAria]);
    for (const el of document.querySelectorAll('[data-i18n-alt]')) el.setAttribute('alt', text[el.dataset.i18nAlt]);
    for (const el of document.querySelectorAll('[data-social]')) el.setAttribute('aria-label', el.dataset.social + ' — ' + text.newTab);
    languageToggle.setAttribute('aria-checked', String(currentLanguage === 'en'));
    languageToggle.setAttribute('aria-label', text.languageLabel);
    languageToggle.title = text.languageHint;
    backToTop.title = text.backToTop;
    if (announce) document.getElementById('language-announcement').textContent = text.languageAnnouncement;
    updateRefLabels();
    scheduleIndicator();
    scheduleScrollUpdate();
  }
  languageToggle.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'vi' ? 'en' : 'vi', true);
    savePreference('ginji-language', currentLanguage);
  });
  let navigationVisible = false;
  function updateNavigation() {
    const bottom = overview.getBoundingClientRect().bottom;
    const threshold = headerClearance() + 80;
    // A 32px band avoids toggling repeatedly at the Hero/About boundary.
    if (!navigationVisible && bottom <= threshold - 16) navigationVisible = true;
    else if (navigationVisible && bottom >= threshold + 16) navigationVisible = false;
    header.classList.toggle('is-visible', navigationVisible);
  }
  function headerClearance() { return header.offsetTop + header.offsetHeight + 24; }
  function updateScroll() {
    scrollPending = false;
    const y = window.scrollY;
    const progress = Math.min(1, Math.max(0, y / Math.max(300, overview.offsetHeight)));
    starLayer.style.setProperty('--star-strength', (1 - .88 * progress).toFixed(3));
    updateNavigation();
    header.classList.toggle('is-scrolled', y > 24);
    const visible = y > window.innerHeight * 2;
    backToTop.classList.toggle('is-visible', visible);
    backToTop.setAttribute('aria-hidden', String(!visible));
    backToTop.tabIndex = visible ? 0 : -1;
    let active = '';
    for (const section of sections) if (section.getBoundingClientRect().top <= headerClearance() + 80) active = section.id;
    setActiveSection(navigationTarget || active);
  }
  function scheduleScrollUpdate() {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(updateScroll);
  }
  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  window.addEventListener('resize', () => { scheduleScrollUpdate(); scheduleIndicator(); }, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScrollUpdate).observe(document.querySelector('main'));
  function cancelScroll() {
    if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);
    scrollRaf = null;
    navigationTarget = null;
    scheduleScrollUpdate();
  }
  function destination(target) {
    const top = target === overview ? 0 : window.scrollY + target.getBoundingClientRect().top - headerClearance();
    return Math.max(0, Math.min(top, document.documentElement.scrollHeight - window.innerHeight));
  }
  function scrollToSection(target) {
    cancelScroll();
    navigationTarget = target.id;
    setActiveSection(navigationTarget);
    const from = window.scrollY;
    const duration = Math.min(1400, Math.max(550, 420 + Math.sqrt(Math.abs(destination(target) - from)) * 17));
    const started = performance.now();
    function finish() {
      window.scrollTo({ top: destination(target), behavior: 'instant' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      scrollRaf = null;
      navigationTarget = null;
      scheduleScrollUpdate();
    }
    if (reducedMotion.matches) { finish(); return; }
    function step(now) {
      const t = Math.min(1, (now - started) / duration);
      const eased = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo({ top: from + (destination(target) - from) * eased, behavior: 'instant' });
      if (t < 1) scrollRaf = requestAnimationFrame(step);
      else finish();
    }
    scrollRaf = requestAnimationFrame(step);
  }
  // Real anchors remain usable without JavaScript and support modified clicks.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    history.pushState(null, '', link.hash);
    scrollToSection(target);
  });
  window.addEventListener('wheel', cancelScroll, { passive: true });
  window.addEventListener('touchstart', cancelScroll, { passive: true });
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Escape', 'Tab'].includes(event.key)) cancelScroll();
  });
  reducedMotion.addEventListener('change', cancelScroll);
  window.addEventListener('popstate', cancelScroll);
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) scrollToSection(target);
  });
  const hashTarget = document.getElementById(location.hash.slice(1));
  if (hashTarget) requestAnimationFrame(() => scrollToSection(hashTarget));

  const refViewer = document.querySelector('.refsheet-viewer');
  const refImage = document.getElementById('refsheet-image');
  const refButtons = Array.from(document.querySelectorAll('[data-ref]'));
  const refs = { a: { src: 'assets/ginji-refsheet.png', alt: 'refAltA' }, b: { src: 'assets/ginji-refsheet-b.png', alt: 'refAltB' } };
  let currentRef = 'a', refRequest = 0;
  function updateRefLabels() {
    refImage.alt = copy[currentLanguage][refs[currentRef].alt];
  }
  async function selectRef(key) {
    if (key === currentRef) { ++refRequest; refViewer.classList.remove('is-switching'); return; }
    const request = ++refRequest;
    refViewer.classList.add('is-switching');
    try {
      // Decode first so a failed/missing asset never replaces the visible image.
      const next = new Image();
      next.src = refs[key].src;
      await next.decode();
      if (request !== refRequest) return;
      currentRef = key;
      refImage.src = next.src;
      updateRefLabels();
      for (const link of refViewer.querySelectorAll('a')) link.href = refs[key].src;
      for (const button of refButtons) button.setAttribute('aria-pressed', String(button.dataset.ref === key));
      refViewer.querySelector('.ref-current').textContent = 'Ref. ' + key.toUpperCase();
      document.getElementById('ref-announcement').textContent = copy[currentLanguage].refChanged + ' Ref. ' + key.toUpperCase();
    } catch {
      if (request === refRequest) {
        refButtons.find(button => button.dataset.ref === key).disabled = true;
        document.getElementById('ref-announcement').textContent = copy[currentLanguage].refUnavailable;
      }
    } finally { if (request === refRequest) refViewer.classList.remove('is-switching'); }
  }
  for (const button of refButtons) button.addEventListener('click', () => selectRef(button.dataset.ref));
  document.querySelector('.ref-selector').hidden = false;

  const portrait = document.querySelector('.portrait');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let portraitFrame = null, tiltX = 0, tiltY = 0;
  function resetPortrait() {
    if (portraitFrame !== null) cancelAnimationFrame(portraitFrame);
    portraitFrame = null;
    portrait.style.removeProperty('--tilt-x'); portrait.style.removeProperty('--tilt-y');
  }
  portrait.addEventListener('pointermove', event => {
    if (!finePointer.matches || reducedMotion.matches || event.pointerType !== 'mouse') return;
    const rect = portrait.getBoundingClientRect();
    tiltX = ( .5 - (event.clientY - rect.top) / rect.height) * 5;
    tiltY = ((event.clientX - rect.left) / rect.width - .5) * 5;
    if (portraitFrame !== null) return;
    portraitFrame = requestAnimationFrame(() => {
      portraitFrame = null;
      portrait.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
      portrait.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
    });
  });
  portrait.addEventListener('pointerleave', resetPortrait);
  reducedMotion.addEventListener('change', resetPortrait);
  finePointer.addEventListener('change', resetPortrait);
  document.addEventListener('visibilitychange', () => { if (document.hidden) resetPortrait(); });
  const storedLanguage = readPreference('ginji-language');
  applyLanguage(storedLanguage === 'vi' || storedLanguage === 'en' ? storedLanguage : (navigator.language || 'vi').toLowerCase().startsWith('vi') ? 'vi' : 'en');
  languageToggle.hidden = false;
  // Observe individual reading blocks, keeping long content visible until fully out of view.
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.classList.toggle('is-revealed', entry.isIntersecting);
    }, { rootMargin: '24px 0px', threshold: 0 });
    for (const el of document.querySelectorAll('.hero, .social-links, .section-heading, .about, .interests-head, .card, .palette, .gallery-intro, .refsheet-viewer, .gallery-empty, .hello > div, .hello > .note')) {
      const rect = el.getBoundingClientRect();
      el.classList.toggle('is-revealed', rect.bottom >= -24 && rect.top <= window.innerHeight + 24);
      el.classList.add('reveal');
      revealObserver.observe(el);
    }
  }

  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) { scheduleScrollUpdate(); return; }
  let width = 0, height = 0, stars = [], raf = null, lastFrame = null, elapsed = 0;
  // Reuse coordinates instead of allocating objects for every star/trail segment.
  const position = { x: 0, y: 0 }, trailPosition = { x: 0, y: 0 };
  const random = (min, max) => min + Math.random() * (max - min);
  function makeStar() {
    const startX = random(-.1, 1.1), drift = random(-.25, .25);
    return { x0: startX, x1: startX + drift - .1, x2: startX - drift + .16, x3: startX + drift,
      phase: Math.random(), duration: random(16000, 34000), size: random(.8, 2.5),
      alpha: random(.22, .58), colour: Math.random() > .4 ? '#628cad' : '#8176b3', trail: Math.random() < .22 };
  }
  function resizeCanvas() {
    width = window.innerWidth; height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = width < 760 ? 58 : 108;
    if (stars.length !== count) stars = Array.from({ length: count }, makeStar);
    if (reducedMotion.matches) drawFrame();
  }
  // Cubic Bézier trajectories give each star a gentle sideways arc as it falls.
  function point(star, t, out) {
    const u = 1 - t;
    out.x = (u*u*u*star.x0 + 3*u*u*t*star.x1 + 3*u*t*t*star.x2 + t*t*t*star.x3) * width;
    out.y = (u*u*u*(-.12) + 3*u*u*t*.12 + 3*u*t*t*.66 + t*t*t*1.12) * height;
  }
  function drawFrame() {
    ctx.clearRect(0, 0, width, height);

    for (const star of stars) {
      const t = (elapsed / star.duration + star.phase) % 1;
      point(star, t, position);
      const p = position, edge = Math.min(1, t * 9, (1 - t) * 9);
      const alpha = star.alpha * edge * (.72 + .28 * Math.sin(elapsed / 2100 + star.phase * 7));
      ctx.strokeStyle = star.colour; ctx.fillStyle = star.colour;
      if (star.trail && !reducedMotion.matches) {
        let previousX = p.x, previousY = p.y;
        for (let j = 1; j <= 9; j++) {
          point(star, Math.max(0, t - j * .004), trailPosition);
          ctx.globalAlpha = alpha * (1 - j / 10) * .45; ctx.lineWidth = .65;
          ctx.beginPath(); ctx.moveTo(trailPosition.x, trailPosition.y); ctx.lineTo(previousX, previousY); ctx.stroke();
          previousX = trailPosition.x; previousY = trailPosition.y;
        }
      }
      ctx.globalAlpha = alpha; const size = star.size;
      ctx.beginPath(); ctx.moveTo(p.x, p.y - size * 2.1); ctx.lineTo(p.x + size * .48, p.y - size * .48);
      ctx.lineTo(p.x + size * 1.65, p.y); ctx.lineTo(p.x + size * .48, p.y + size * .48);
      ctx.lineTo(p.x, p.y + size * 2.1); ctx.lineTo(p.x - size * .48, p.y + size * .48);
      ctx.lineTo(p.x - size * 1.65, p.y); ctx.lineTo(p.x - size * .48, p.y - size * .48); ctx.closePath(); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function animate(now) {
    raf = null;
    if (document.hidden || reducedMotion.matches) return;
    // Milliseconds, not frame counts: identical speed at any display refresh rate.
    if (lastFrame !== null) elapsed += now - lastFrame;
    lastFrame = now;
    drawFrame();
    raf = requestAnimationFrame(animate);
  }
  function syncMotion() {
    if (raf !== null) cancelAnimationFrame(raf);
    raf = null; lastFrame = null;
    drawFrame();
    if (!document.hidden && !reducedMotion.matches) raf = requestAnimationFrame(animate);
  }
  document.addEventListener('visibilitychange', syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  window.addEventListener('resize', resizeCanvas, { passive: true });
  resizeCanvas(); syncMotion();
  scheduleScrollUpdate();
})();
