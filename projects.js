(function () {
  'use strict';
  const PROJECTS = [
    {
      id:       'kres-chat',
      name:     'Kres Chat',
      icon: 'fas fa-robot',
iconColor: 'palevioletred' ,
      tagline:  'AI Chat Assistant Interface',
      desc:     'A friendly, conversational AI chat UI with a welcoming personality. Features a clean minimal design, message counter, and a warm tone that makes AI feel approachable and human.',
      tags:     ['JavaScript', 'CSS3', 'AI UI', 'Chat'],
      category: 'service',
      url:      'https://kres-chat.vercel.app/',
      github:   'https://github.com/Kstiana',
      accent:   '#6366f1',
      bg:       'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      featured: true,
    },
    {
      id:       'palettrix',
      name:     'Palettrix',
      icon: 'fas fa-palette',
iconColor: 'coral' ,
      tagline:  'Color Palette Generator',
      desc:     'A creative tool for designers — generates beautiful color palettes with hex codes, names, and visualization. Planned features include saved palettes, history, and UI mockup previews.',
      tags:     ['JavaScript', 'CSS3', 'Design Tools', 'Color'],
      category: 'utility',
      url:      'https://palettrix-ks.vercel.app/',
      github:   'https://github.com/Kstiana',
      accent:   '#f59e0b',
      bg:       'linear-gradient(135deg, #451a03 0%, #78350f 50%, #d97706 100%)',
      featured: true,
    },
    {
      id:       'ksglow',
      name:     'KSGlow Skincare',
     icon: 'fas fa-spa',
iconColor: 'pink' ,
      tagline:  'Premium Skincare Brand Site',
      desc:     'A high-fidelity marketing site that builds a full brand story — product details, scientific backing, social proof, a countdown timer, FAQ, and compelling copy that merges nature with precision.',
      tags:     ['HTML5', 'CSS3', 'JavaScript', 'Landing Page'],
      category: 'brand',
      url:      'https://ks-glow.vercel.app/',
      github:   'https://github.com/Kstiana',
      accent:   '#10b981',
      bg:       'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #059669 100%)',
      featured: true,
    },
    {
      id:       'chopnow',
      name:     'ChopNow',
      icon: 'fas fa-utensils',
iconColor: '#facc15' ,
      tagline:  'Food Delivery Service App',
      desc:     'A fast, energetic food delivery interface modelled after popular apps. Showcases restaurant categories, featured listings, value props, and a live customer support chat widget.',
      tags:     ['JavaScript', 'CSS3', 'App UI', 'E-commerce'],
      category: 'service',
      url:      'https://ks-chopnow.vercel.app/',
      github:   'https://github.com/Kstiana',
      accent:   '#ef4444',
      bg:       'linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #dc2626 100%)',
      featured: false,
    },
    {
      id:       'weatherverse',
      name:     'WeatherVerse',
      icon: 'fas fa-cloud-sun-rain',
iconColor: '#38bdf8' ,
      tagline:  'Comprehensive Weather App',
      desc:     'An ambitious weather application with real-time data, hourly and daily forecasts, sun & moon tracking, air quality indices, and UV level monitoring — a full atmospheric dashboard.',
      tags:     ['JavaScript', 'API', 'CSS3', 'Data Viz'],
      category: 'utility',
      url:      'https://weatherverse-theta.vercel.app',
      github:   'https://github.com/Kstiana',
      accent:   '#0ea5e9',
      bg:       'linear-gradient(135deg, #0c1445 0%, #1e3a8a 50%, #0284c7 100%)',
      featured: false,
    },
    {
      id:       'moodflix',
      name:     'MoodFlix',
      icon: 'fas fa-film',
iconColor: '#22c55e' ,
      tagline:  'Mood-Based Movie Recommender',
      desc:     'An immersive movie recommendation engine driven by how you feel. Select a mood, get curated films. "Movies That Feel Right" — a uniquely personal and engaging entertainment concept.',
      tags:     ['JavaScript', 'API', 'CSS3', 'Entertainment'],
      category: 'content',
      url:      'https://moodflix-peach.vercel.app/',
      github:   'https://github.com/Kstiana',
      accent:   '#a855f7',
      bg:       'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #7c3aed 100%)',
      featured: false,
    },
  ];

  function buildCard(project) {
    const card = document.createElement('article');
    card.className   = 'project-card';
    card.dataset.category = project.category;
    card.setAttribute('aria-label', `Project: ${project.name}`);

    card.dataset.animate = 'fade-up';

    const preview = document.createElement('div');
    preview.className = 'project-preview';

    const previewInner = document.createElement('div');
    previewInner.className   = 'project-preview-inner';
    previewInner.style.background = project.bg;
    previewInner.setAttribute('aria-hidden', 'true');

    previewInner.innerHTML = `
      <div class="preview-deco" style="
        display:flex;flex-direction:column;align-items:center;gap:8px;
        position:relative;z-index:1;
      ">
        <span style="font-size:clamp(2.2rem,5vw,3rem);line-height:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4))">
  <i class="${project.icon}" style="color:${project.iconColor}"></i>
</span>
        <span style="
          font-family:'Syne',sans-serif;font-size:clamp(0.65rem,1.5vw,0.75rem);
          font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
          color:rgba(255,255,255,0.6);
        ">${project.tagline}</span>
      </div>
      <div style="
        position:absolute;inset:0;
        background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.07), transparent 60%);
        pointer-events:none;
      "></div>
    `;

    const badge = document.createElement('span');
    badge.className   = 'project-cat-badge';
    badge.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);

    if (project.featured) {
      const star = document.createElement('span');
      star.setAttribute('aria-label', 'Featured project');
      star.style.cssText = `
        position:absolute;top:14px;left:14px;
        width:28px;height:28px;
        background:rgba(255,31,164,0.9);
        border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        font-size:0.6rem;color:#fff;
        z-index:2;
        box-shadow:0 2px 8px rgba(255,31,164,0.4);
      `;
      star.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
      preview.appendChild(star);
    }

    preview.appendChild(previewInner);
    preview.appendChild(badge);

    const body = document.createElement('div');
    body.className = 'project-body';

    const name = document.createElement('h3');
    name.className   = 'project-name';
    name.textContent = project.name;

    const desc = document.createElement('p');
    desc.className   = 'project-desc';
    desc.textContent = project.desc;

    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'project-tags';
    tagsWrap.setAttribute('aria-label', `Technologies: ${project.tags.join(', ')}`);
    project.tags.forEach(tag => {
      const t = document.createElement('span');
      t.className   = 'project-tag';
      t.textContent = tag;
      tagsWrap.appendChild(t);
    });

    body.appendChild(name);
    body.appendChild(desc);
    body.appendChild(tagsWrap);

    const footer = document.createElement('div');
    footer.className = 'project-footer';

    const liveLink = document.createElement('a');
    liveLink.href      = project.url;
    liveLink.target    = '_blank';
    liveLink.rel       = 'noopener noreferrer';
    liveLink.className = 'project-link';
    liveLink.setAttribute('aria-label', `View ${project.name} live`);
    liveLink.innerHTML = `
      <span>Live Preview</span>
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    `;

    const ghLink = document.createElement('a');
    ghLink.href      = project.github;
    ghLink.target    = '_blank';
    ghLink.rel       = 'noopener noreferrer';
    ghLink.className = 'project-link-gh';
    ghLink.setAttribute('aria-label', `View ${project.name} on GitHub`);
    ghLink.innerHTML = '<i class="fab fa-github" aria-hidden="true"></i>';

    footer.appendChild(liveLink);
    footer.appendChild(ghLink);

    card.appendChild(preview);
    card.appendChild(body);
    card.appendChild(footer);

    card.addEventListener('mousemove', onCardTilt);
    card.addEventListener('mouseleave', onCardTiltReset);

    return card;
  }

  function onCardTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) / (rect.width  / 2);
    const dy   = (e.clientY - cy) / (rect.height / 2);

    const tiltX = dy * -6;   
    const tiltY = dx *  6;

    card.style.transform    = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    card.style.transition   = 'transform 0.1s linear, box-shadow 0.25s, border-color 0.25s';
  }

  function onCardTiltReset(e) {
    const card = e.currentTarget;
    card.style.transform  = '';
    card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s, border-color 0.25s';
  }

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();
    PROJECTS.forEach(project => {
      fragment.appendChild(buildCard(project));
    });
    grid.appendChild(fragment);

    if (window.__portfolioObserver) {
      grid.querySelectorAll('[data-animate]').forEach(el => {
        window.__portfolioObserver.observe(el);
      });
    }
  }

  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const grid       = document.getElementById('projects-grid');
    if (!filterBtns.length || !grid) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
   
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;
        const cards  = grid.querySelectorAll('.project-card');

        cards.forEach((card, i) => {
          const match = filter === 'all' || card.dataset.category === filter;

          if (match) {
            card.classList.remove('hidden');
          
            card.style.opacity   = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity    = '1';
              card.style.transform  = 'translateY(0)';
            }, i * 60);
          } else {
            card.classList.add('hidden');
            card.style.opacity   = '';
            card.style.transform = '';
            card.style.transition = '';
          }
        });

        const visible = grid.querySelectorAll('.project-card:not(.hidden)');
        let emptyMsg = grid.querySelector('.projects-empty');

        if (visible.length === 0) {
          if (!emptyMsg) {
            emptyMsg = document.createElement('p');
            emptyMsg.className = 'projects-empty';
            emptyMsg.style.cssText = `
              grid-column:1/-1;
              text-align:center;
              padding:60px 20px;
              color:var(--text-muted);
              font-family:'Syne',sans-serif;
              font-size:1rem;
              font-weight:600;
            `;
            emptyMsg.textContent = 'No projects in this category yet — check back soon!';
            grid.appendChild(emptyMsg);
          }
        } else {
          if (emptyMsg) emptyMsg.remove();
        }
      });

      btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    });
  }

  function init() {
    renderProjects();
    initFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
