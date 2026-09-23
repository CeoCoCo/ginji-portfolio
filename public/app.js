(() => {
  'use strict';
  const copy = {
    vi: {
      title: 'Ginji — Một góc nhỏ của mình',
      description: 'Ginji (CoCo) — sinh viên Luật, thích game, âm nhạc và những ngày trời âm u. Một góc nhỏ để bạn biết thêm về mình.',
      skip: 'Đến nội dung chính', navigation: 'Điều hướng chính', home: 'Ginji — đầu trang',
      heroEyebrow: 'Một góc nhỏ của mình', heroIntro: 'Hey, mình là',
      heroLead: 'Một sinh viên Luật, một chiếc cáo hơi rụt rè, và một người thích những ngày trời âm u.',
      heroButton: 'Làm quen một chút', identity: 'Thẻ tên Ginji, còn gọi là CoCo',
      identityTop: 'JUST A LITTLE INTROVERT', identityAlias: 'aka CoCo / Ceo',
      stripLaw: 'Sinh viên Luật', stripGames: 'Game & âm nhạc', stripJapanese: 'Một chút tiếng Nhật',
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
      galleryTitle: 'Một chút về thế giới của Ginji.', galleryCaption: 'Refsheet nhân vật', galleryView: 'Xem ảnh đầy đủ',
      galleryOpen: 'Mở refsheet Ginji đầy đủ trong tab mới', galleryAlt: 'Refsheet Ginji: kitsune trắng và xanh với hai đuôi, góc nhìn trước, sau và các chi tiết thiết kế.',
      helloLabel: 'MỘT LỜI CHÀO', helloHeadline: 'Đừng ngại nói',
      helloText: 'Nếu bạn cũng thích game, âm nhạc hay chỉ muốn trò chuyện một chút, có lẽ chúng mình sẽ có chuyện để kể.',
      helloNote: 'Mình có thể hơi chậm mở lời. Nhưng rất vui khi bạn ghé qua.',
      footer: 'Ginji / CoCo — Cứ thoải mái là mình.', footerTop: 'Lên đầu trang ↑', backToTop: 'Về đầu trang',
      languageLabel: 'Hiển thị bằng tiếng Anh', languageHint: 'Switch to English', languageAnnouncement: 'Đã chuyển sang tiếng Việt.',
      entryWelcome: 'Chào mừng đến với Ginji', entryEnter: 'TAP HERE — Vào trang của Ginji'
    },
    en: {
      title: 'Ginji — A little corner of mine',
      description: 'Ginji (CoCo) — a law student into games, music and cloudy days. A little corner to get to know me.',
      skip: 'Skip to main content', navigation: 'Main navigation', home: 'Ginji — back to top',
      heroEyebrow: 'A little corner of mine', heroIntro: 'Hey, I’m',
      heroLead: 'A law student, a slightly shy fox, and someone with a soft spot for cloudy days.',
      heroButton: 'Get to know me', identity: 'Ginji’s name card, also known as CoCo',
      identityTop: 'JUST A LITTLE INTROVERT', identityAlias: 'aka CoCo / Ceo',
      stripLaw: 'Law student', stripGames: 'Games & music', stripJapanese: 'A little Japanese',
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
      galleryTitle: 'A little of Ginji’s world.', galleryCaption: 'Character reference sheet', galleryView: 'View full image',
      galleryOpen: 'Open Ginji’s full reference sheet in a new tab', galleryAlt: 'Ginji reference sheet: a white and blue kitsune with two tails, front and back views, and character design details.',
      helloLabel: 'A LITTLE HELLO', helloHeadline: 'Feel free to say',
      helloText: 'If you’re into games, music or just a little conversation, we might have a few stories to share.',
      helloNote: 'I might be slow to say the first word. But I’m glad you stopped by.',
      footer: 'Ginji / CoCo — Just being me.', footerTop: 'Back to top ↑', backToTop: 'Back to top',
      languageLabel: 'Display in English', languageHint: 'Chuyển sang tiếng Việt', languageAnnouncement: 'Switched to English.',
      entryWelcome: 'Welcome to Ginji', entryEnter: 'TAP HERE — Enter Ginji’s website'
    }
  };
  const languageToggle = document.querySelector('.language-toggle');
  const entryScreen = document.querySelector('.entry-screen');
  const entryButton = document.querySelector('.entry-button');
  const backToTop = document.querySelector('.back-to-top');
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  const starLayer = document.querySelector('.starlight');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentLanguage = 'vi';
  const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Private browsing may block storage. */ } };
  function applyLanguage(lang, announce = false) {
    currentLanguage = lang === 'en' ? 'en' : 'vi';
    const text = copy[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = text.title;
    document.querySelector('meta[name="description"]').content = text.description;
    for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = text[el.dataset.i18n];
    for (const el of document.querySelectorAll('[data-i18n-aria]')) el.setAttribute('aria-label', text[el.dataset.i18nAria]);
    for (const el of document.querySelectorAll('[data-i18n-alt]')) el.setAttribute('alt', text[el.dataset.i18nAlt]);
    languageToggle.setAttribute('aria-checked', String(currentLanguage === 'en'));
    languageToggle.setAttribute('aria-label', text.languageLabel);
    languageToggle.title = text.languageHint;
    backToTop.title = text.backToTop;
    if (announce) document.getElementById('language-announcement').textContent = text.languageAnnouncement;
    scheduleScrollUpdate();
  }
  languageToggle.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'vi' ? 'en' : 'vi', true);
    savePreference('ginji-language', currentLanguage);
  });
  // Keep links ordinary anchors: navigation works even if JavaScript is unavailable.
  let scrollPending = false;
  const sectionLinks = Array.from(document.querySelectorAll('.navlinks a'));
  const sections = sectionLinks.map(link => document.querySelector(link.hash));
  function updateScroll() {
    scrollPending = false;
    const y = window.scrollY;
    const fadeDistance = Math.max(300, hero.offsetTop + hero.offsetHeight * .9);
    const progress = Math.min(1, Math.max(0, y / fadeDistance));
    starLayer.style.setProperty('--star-strength', (1 - .92 * progress).toFixed(3));
    header.classList.toggle('is-scrolled', y > 24);
    const visible = y >= window.innerHeight * 2;
    backToTop.classList.toggle('is-visible', visible);
    backToTop.setAttribute('aria-hidden', String(!visible));
    backToTop.tabIndex = visible ? 0 : -1;
    let active = '';
    for (const section of sections) if (section.getBoundingClientRect().top <= header.getBoundingClientRect().bottom + 80) active = section.id;
    for (const link of sectionLinks) {
      if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  function scheduleScrollUpdate() {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(updateScroll);
  }
  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScrollUpdate).observe(document.querySelector('main'));
  backToTop.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.brand').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
  const storedLanguage = readPreference('ginji-language');
  const initialLanguage = storedLanguage === 'vi' || storedLanguage === 'en' ? storedLanguage : (navigator.language || 'vi').toLowerCase().startsWith('vi') ? 'vi' : 'en';
  applyLanguage(initialLanguage);
  languageToggle.hidden = false;

  // Native modal keeps the loaded page inert and confines keyboard focus.
  // Without JavaScript (or dialog support), the ordinary website stays accessible.
  let entryClosing = false, entryTimer;
  function finishEntry() {
    window.clearTimeout(entryTimer);
    if (!entryScreen.open) return;
    entryScreen.close();
    entryScreen.hidden = true;
    document.documentElement.classList.remove('entry-open');
    document.querySelector('.brand').focus({ preventScroll: true });
    scheduleScrollUpdate();
  }
  function dismissEntry() {
    if (entryClosing) return;
    entryClosing = true;
    if (reducedMotion.matches) { finishEntry(); return; }
    entryScreen.classList.add('is-leaving');
    // Fallback also releases the modal if transitionend is interrupted.
    entryTimer = window.setTimeout(finishEntry, 700);
  }
  entryButton.addEventListener('click', dismissEntry);
  entryScreen.addEventListener('cancel', event => { event.preventDefault(); dismissEntry(); });
  entryScreen.addEventListener('transitionend', event => {
    if (event.target === entryScreen && event.propertyName === 'opacity' && entryClosing) finishEntry();
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches && entryClosing) finishEntry();
  });
  if (typeof entryScreen.showModal === 'function') {
    entryScreen.hidden = false;
    entryScreen.showModal();
    document.documentElement.classList.add('entry-open');
  }

  // Retain the initial sparkle and shooting-star entrance from the previous design.
  const welcome = document.getElementById('welcome-stars');
  const introFragment = document.createDocumentFragment();
  for (let i = 0; i < 32; i++) {
    const star = document.createElement('span');
    star.className = 'star'; star.textContent = i % 3 === 0 ? '✧' : '✦';
    star.style.cssText = `--x:${(i * 37 + 5) % 100}%;--y:${(i * 29 + 3) % 100}%;--size:${8 + (i % 5) * 4}px;--delay:${(i % 7) * .11}s`;
    introFragment.append(star);
  }
  for (let i = 0; i < 3; i++) {
    const meteor = document.createElement('span'); meteor.className = 'meteor';
    meteor.style.cssText = `--x:${12 + i * 30}%;--y:${5 + i * 15}%;--delay:${.2 + i * .65}s`;
    introFragment.append(meteor);
  }
  welcome.append(introFragment);
  let welcomeTimer;
  function startWelcome() {
    window.clearTimeout(welcomeTimer);
    if (reducedMotion.matches) welcome.hidden = true;
    else welcomeTimer = window.setTimeout(() => { welcome.hidden = true; }, 4500);
  }
  entryScreen.addEventListener('close', startWelcome, { once: true });
  if (!entryScreen.open) startWelcome();

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
    if (reducedMotion.matches || entryScreen.open) drawFrame();
  }
  // Cubic Bézier trajectories give each star a gentle sideways arc as it falls.
  function point(star, t, out) {
    const u = 1 - t;
    out.x = (u*u*u*star.x0 + 3*u*u*t*star.x1 + 3*u*t*t*star.x2 + t*t*t*star.x3) * width;
    out.y = (u*u*u*(-.12) + 3*u*u*t*.12 + 3*u*t*t*.66 + t*t*t*1.12) * height;
  }
  function drawFrame() {
    ctx.clearRect(0, 0, width, height);
    const entry = reducedMotion.matches ? .7 : Math.min(1, .35 + elapsed / 4500);
    for (const star of stars) {
      const t = (elapsed / star.duration + star.phase) % 1;
      point(star, t, position);
      const p = position, edge = Math.min(1, t * 9, (1 - t) * 9);
      const alpha = star.alpha * edge * (.72 + .28 * Math.sin(elapsed / 2100 + star.phase * 7)) * entry;
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
    if (document.hidden || reducedMotion.matches || entryScreen.open) return;
    // Milliseconds, not frame counts: identical speed at any display refresh rate.
    if (lastFrame !== null) elapsed += now - lastFrame;
    lastFrame = now;
    drawFrame();
    raf = requestAnimationFrame(animate);
  }
  function syncMotion() {
    if (raf !== null) cancelAnimationFrame(raf);
    raf = null; lastFrame = null;
    if (reducedMotion.matches) welcome.hidden = true;
    drawFrame();
    if (!document.hidden && !reducedMotion.matches && !entryScreen.open) raf = requestAnimationFrame(animate);
  }
  entryScreen.addEventListener('close', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  window.addEventListener('resize', resizeCanvas, { passive: true });
  resizeCanvas(); syncMotion();
  scheduleScrollUpdate();
})();
