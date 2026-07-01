/* ============================================
   ECE CAREER HUB — APP v2.0
   Real company data + 14-domain project system
   ============================================ */

const App = {
  deferredInstallPrompt: null,
  _currentProjectDomain: 'embedded',
  _currentProjectLevel: 'All',

  // 1) Initialize Data (Live API sync with Offline Fallback)
  async init() {
    try {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      // For GitHub pages/APK, point to Vercel. For local testing, use relative or localhost.
      const apiBase = window.location.protocol === 'file:' ? 'https://web-tech-kappa.vercel.app' : '';
      
      const res = await fetch(`${apiBase}/api/all`);
      if (res.ok) {
        const liveData = await res.json();
        // Dynamically override the static arrays from data.js
        window.ECE_CATEGORIES = liveData.categories;
        window.COMPANY_DATA = liveData.companies;
        window.ALL_ECE_PROJECTS = liveData.projects;
        console.log("✅ Synced live data from Neon PostgreSQL");
      }
    } catch(e) {
      console.log("⚠️ Offline mode: Using local cached data", e);
    }

    Storage.init(); 
    const savedTheme = Storage.getTheme();
    UI.applyTheme(savedTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (Storage.getTheme() === 'system') UI.applyTheme('system');
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      App.deferredInstallPrompt = e;
      document.getElementById('install-banner')?.style?.setProperty('display', 'flex');
    });

    this.renderHomePage();
    this.initBottomNav();
    UI.initScrollTop();
    UI.initPullToRefresh();
    this.initHomeSearch();
    this.initSettings();
    this.initFab();
    this.initInstallBanner();

    setTimeout(() => {
      const ls = document.getElementById('loading-screen');
      if (ls) { ls.classList.add('hide'); setTimeout(() => ls.remove(), 500); }
    }, 1200);
  },

  // ---- HOME PAGE ----
  renderHomePage() {
    this.renderHeroStats();
    this.renderCategoryGrid();
    this.renderRecentlyOpened();
  },

  renderHeroStats() {
    const el = document.getElementById('hero-stats');
    if (!el) return;
    const totalCompanies = Object.values(COMPANY_DATA).reduce((a, c) => a + c.length, 0);
    el.innerHTML = `
      <div class="hero-stat"><div class="stat-num">${ECE_CATEGORIES.length}</div><div class="stat-label">Domains</div></div>
      <div class="hero-stat"><div class="stat-num">${ALL_ECE_PROJECTS.length}</div><div class="stat-label">Projects</div></div>
      <div class="hero-stat"><div class="stat-num">${totalCompanies}+</div><div class="stat-label">Companies</div></div>
    `;
  },

  renderCategoryGrid() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    grid.innerHTML = ECE_CATEGORIES.map(cat => `
      <div class="category-card ripple-container"
           style="background:${cat.gradient};"
           data-id="${cat.id}"
           onclick="App.openCategory('${cat.id}')"
           role="button" tabindex="0" aria-label="Open ${cat.name}">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-name">${cat.name}</span>
        <span class="category-count">${(COMPANY_DATA[cat.id]||[]).length} companies</span>
      </div>
    `).join('');
    grid.querySelectorAll('.category-card').forEach(el => UI.addRipple(el));
  },

  renderRecentlyOpened() {
    const container = document.getElementById('recently-opened');
    const section = document.getElementById('recent-section');
    if (!container || !section) return;
    const recent = Storage.getRecentlyOpened();
    if (recent.length === 0) { section.style.display = 'none'; return; }
    section.style.display = '';
    container.innerHTML = recent.map(id => {
      const cat = ECE_CATEGORIES.find(c => c.id === id);
      if (!cat) return '';
      return `<div class="recent-chip ripple-container" onclick="App.openCategory('${cat.id}')">${cat.icon} ${cat.name}</div>`;
    }).join('');
    container.querySelectorAll('.recent-chip').forEach(el => UI.addRipple(el));
  },

  openCategory(categoryId) {
    Storage.addRecentlyOpened(categoryId);
    Router.navigate('company', { categoryId });
  },

  // ---- COMPANY PAGE ----
  renderCompanyPage(categoryId) {
    const cat = ECE_CATEGORIES.find(c => c.id === categoryId);
    if (!cat) return;
    const page = document.getElementById('company-page');
    const isFav = Storage.isCategoryFavorite(categoryId);
    const companies = COMPANY_DATA[categoryId] || [];

    page.innerHTML = `
      <div class="page-header" style="background:transparent;border:none;padding:12px 16px 0;">
        <button class="back-btn" onclick="Router.back()" aria-label="Go back">←</button>
        <h1>${cat.icon} ${cat.name}</h1>
        <button class="fav-btn ${isFav?'active':''}" id="cat-fav-btn"
                onclick="App.toggleCategoryFavorite('${categoryId}')"
                style="color:${isFav?'#FFD700':'var(--text-muted)'};">
          ${isFav?'⭐':'☆'}
        </button>
      </div>

      <div class="company-page-hero" style="background:${cat.gradient};margin:12px 16px;border-radius:24px;">
        <span class="company-page-icon">${cat.icon}</span>
        <h2 class="company-page-title" style="color:#fff;">${cat.name}</h2>
        <p class="company-page-sub" style="color:rgba(255,255,255,0.85);">${cat.desc}</p>
      </div>

      <div style="padding:0 16px 8px;">
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" id="company-search" placeholder="Search companies..." aria-label="Search">
        </div>
      </div>

      <div style="padding:0 16px 8px;">
        <p class="section-title">${companies.length} Companies — Career Pages</p>
      </div>

      <div class="links-grid card-grid" id="company-links-grid">
        ${companies.length > 0
          ? companies.map(c => this.renderCompanyCard(c, cat)).join('')
          : `<div class="empty-state"><div class="empty-icon">🔗</div>
              <div class="empty-title">Companies Coming Soon</div>
              <div class="empty-desc">Career links for this domain will be added soon.</div>
             </div>`
        }
      </div>
    `;

    const searchInput = page.querySelector('#company-search');
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      page.querySelectorAll('.link-card').forEach(card => {
        const text = (card.querySelector('.link-title')?.textContent || '').toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });

    page.querySelectorAll('.link-card').forEach(el => UI.addRipple(el));
  },

  renderCompanyCard(company, cat) {
    const isBookmarked = Storage.isLinkBookmarked(company.id);
    return `
      <div class="link-card ripple-container" data-id="${company.id}"
           data-bookmarked="${isBookmarked}" id="link-card-${company.id}">
        <div class="link-icon" style="background:${cat.gradient}">🏢</div>
        <div class="link-info">
          <div class="link-title">${company.name}</div>
          <div class="link-url">${company.desc || company.url}</div>
        </div>
        <div class="link-actions">
          <button class="btn btn-icon-sm btn-ghost bookmark-btn"
                  onclick="App.toggleLinkBookmark('${company.id}',event)"
                  style="color:${isBookmarked?'#FFD700':'var(--text-muted)'};"
                  title="${isBookmarked?'Remove bookmark':'Bookmark'}">
            ${isBookmarked?'⭐':'☆'}
          </button>
          <button class="btn btn-icon-sm btn-primary"
                  onclick="App.openLink('${company.url}','${company.id}',event)"
                  title="Open careers page">↗</button>
        </div>
      </div>
    `;
  },

  toggleLinkBookmark(linkId, e) {
    e?.stopPropagation();
    const added = Storage.toggleBookmarkLink(linkId);
    const card = document.getElementById(`link-card-${linkId}`);
    if (card) {
      card.dataset.bookmarked = added;
      const btn = card.querySelector('.bookmark-btn');
      if (btn) { btn.style.color = added?'#FFD700':'var(--text-muted)'; btn.textContent = added?'⭐':'☆'; }
    }
    UI.showToast(added ? 'Company bookmarked! ⭐' : 'Bookmark removed', added?'bookmark':'info');
  },

  openLink(url, id, e) {
    e?.stopPropagation();
    if (!url || url.trim() === '') { UI.showToast('No URL set', 'warning'); return; }
    try { window.open(url, '_blank', 'noopener,noreferrer'); }
    catch { UI.showToast('Could not open link', 'error'); }
  },

  toggleCategoryFavorite(categoryId) {
    const added = Storage.toggleFavoriteCategory(categoryId);
    const btn = document.getElementById('cat-fav-btn');
    if (btn) { btn.textContent = added?'⭐':'☆'; btn.classList.toggle('active', added); btn.style.color = added?'#FFD700':'var(--text-muted)'; }
    UI.showToast(added ? 'Added to favorites! ⭐' : 'Removed from favorites', added?'heart':'info');
  },

  // ---- PROJECTS PAGE (14 domains × 4 levels) ----
  renderProjectsPage(domainId, level) {
    const domain = domainId || this._currentProjectDomain || 'embedded';
    const lvl = level || this._currentProjectLevel || 'All';
    this._currentProjectDomain = domain;
    this._currentProjectLevel = lvl;

    // Update domain tabs
    document.querySelectorAll('.domain-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.domain === domain);
    });
    // Update level chips
    document.querySelectorAll('#proj-level-chips .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.level === lvl);
    });

    const searchInput = document.getElementById('projects-search');
    const q = (searchInput?.value || '').toLowerCase().trim();

    let projects = ALL_ECE_PROJECTS.filter(p => p.domain === domain);
    if (lvl !== 'All') projects = projects.filter(p => p.level === lvl);
    if (q) projects = projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tools.toLowerCase().includes(q)
    );

    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    if (projects.length === 0) {
      grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div>
        <div class="empty-title">No projects found</div>
        <div class="empty-desc">Try a different domain, level or search term</div></div>`;
      return;
    }

    // Group by level if "All" selected
    if (lvl === 'All') {
      grid.innerHTML = LEVEL_ORDER.map(lv => {
        const lvProjects = projects.filter(p => p.level === lv);
        if (lvProjects.length === 0) return '';
        return `
          <div class="level-section">
            <div class="level-header">
              <span class="level-dot" style="background:${this.levelColor(lv)}"></span>
              <span>${lv}</span>
              <span class="level-count">${lvProjects.length}</span>
            </div>
            ${lvProjects.map(p => this.renderProjectCard(p)).join('')}
          </div>`;
      }).join('');
    } else {
      grid.innerHTML = projects.map(p => this.renderProjectCard(p)).join('');
    }

    grid.querySelectorAll('.project-card-sm').forEach(el => UI.addRipple(el));
  },

  levelColor(level) {
    const map = { 'Basic':'#43e97b', 'Intermediate':'#f7971e', 'Advanced':'#ff6b9d', 'Industry Level':'#6c63ff' };
    return map[level] || '#888';
  },

  renderProjectCard(proj) {
    const isFav = Storage.isProjectFavorite(proj.id);
    const hasNote = Storage.getNote(proj.id).length > 0;
    const domInfo = PROJECT_DOMAINS.find(d => d.id === proj.domain);
    return `
      <div class="project-card-sm ripple-container card" id="proj-${proj.id}">
        <div class="proj-top">
          <div class="proj-badges">
            <span class="badge ${this.levelBadgeClass(proj.level)}">${proj.level}</span>
            ${hasNote ? '<span class="badge badge-info">📝</span>' : ''}
          </div>
          <div class="proj-actions">
            <button class="fav-btn ${isFav?'active':''}"
                    onclick="App.toggleProjectFav('${proj.id}',event)"
                    style="color:${isFav?'#FFD700':'var(--text-muted)'};"
                    title="Save to favorites">
              ${isFav?'⭐':'☆'}
            </button>
          </div>
        </div>
        <div class="proj-title">${proj.title}</div>
        <div class="proj-desc">${proj.desc}</div>
        <div class="proj-tools">🛠️ ${proj.tools}</div>
        <div class="proj-footer">
          <button class="btn btn-ghost btn-sm" onclick="UI.openNotesModal('${proj.id}','${proj.title.replace(/'/g,"\\'")}')">
            📝 ${hasNote?'Notes':'Add Note'}
          </button>
          <button class="btn btn-secondary btn-sm" onclick="App.shareProject('${proj.id}')">
            ↗ Share
          </button>
        </div>
      </div>
    `;
  },

  levelBadgeClass(level) {
    const map = { 'Basic':'diff-beginner', 'Intermediate':'diff-intermediate', 'Advanced':'diff-advanced', 'Industry Level':'badge-primary' };
    return map[level] || 'badge-muted';
  },

  toggleProjectFav(projectId, e) {
    e?.stopPropagation();
    const added = Storage.toggleFavoriteProject(projectId);
    const card = document.getElementById(`proj-${projectId}`);
    if (card) {
      const btn = card.querySelector('.fav-btn');
      if (btn) { btn.textContent = added?'⭐':'☆'; btn.classList.toggle('active',added); btn.style.color = added?'#FFD700':'var(--text-muted)'; }
    }
    UI.showToast(added ? 'Project saved! ⭐' : 'Removed from favorites', added?'heart':'info');
  },

  shareProject(projectId) {
    const proj = ALL_ECE_PROJECTS.find(p => p.id === projectId);
    if (!proj) return;
    const text = `${proj.title}\n\n${proj.desc}\n\nTools: ${proj.tools}`;
    if (navigator.share) {
      navigator.share({ title: proj.title, text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => UI.showToast('Copied!','success')).catch(()=>{});
    }
  },

  // ---- FAVORITES PAGE ----
  renderFavoritesPage() {
    const page = document.getElementById('favorites-content') || document.getElementById('favorites-page');
    if (!page) return;
    const favs = Storage.getFavorites();
    const favCategories = ECE_CATEGORIES.filter(c => favs.categories.includes(c.id));
    const favProjects = ALL_ECE_PROJECTS.filter(p => favs.projects.includes(p.id));

    page.innerHTML = `
      <div class="section-title" style="margin-bottom:12px;">⭐ Favorite Domains</div>
      ${favCategories.length > 0
        ? `<div class="categories-grid card-grid" style="margin-bottom:20px;">
            ${favCategories.map(cat => `
              <div class="category-card ripple-container" style="background:${cat.gradient};" onclick="App.openCategory('${cat.id}')">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-name">${cat.name}</span>
              </div>`).join('')}
           </div>`
        : `<div class="empty-state" style="padding:20px;">
            <div class="empty-icon">⭐</div>
            <div class="empty-title">No favorite domains yet</div>
            <div class="empty-desc">Tap ⭐ on any domain page to save it here</div>
           </div>`}

      <div class="divider" style="margin:8px 0 16px;"></div>
      <div class="section-title" style="margin-bottom:12px;">💡 Saved Projects</div>
      ${favProjects.length > 0
        ? `<div class="projects-grid-fav">${favProjects.map(p => this.renderProjectCard(p)).join('')}</div>`
        : `<div class="empty-state" style="padding:20px;">
            <div class="empty-icon">💡</div>
            <div class="empty-title">No saved projects yet</div>
            <div class="empty-desc">Tap ⭐ on any project to save it here</div>
           </div>`}

      <div class="divider" style="margin:16px 0;"></div>
      <div class="section-title" style="margin-bottom:12px;">🔖 Bookmarked Companies</div>
      ${this.renderBookmarkedCompanies()}
    `;

    page.querySelectorAll('.category-card').forEach(el => UI.addRipple(el));
    page.querySelectorAll('.project-card-sm').forEach(el => UI.addRipple(el));
  },

  renderBookmarkedCompanies() {
    const bookmarked = Storage.getBookmarkedLinks();
    if (bookmarked.length === 0) {
      return `<div class="empty-state" style="padding:20px;">
        <div class="empty-icon">🔖</div><div class="empty-title">No bookmarked companies</div>
        <div class="empty-desc">Bookmark company career pages to find them here quickly</div></div>`;
    }
    const results = [];
    ECE_CATEGORIES.forEach(cat => {
      (COMPANY_DATA[cat.id]||[]).forEach(c => {
        if (bookmarked.includes(c.id)) results.push({ ...c, cat });
      });
    });
    if (results.length === 0) return '<div class="empty-state"><div class="empty-icon">🔖</div><div class="empty-title">No bookmarks found</div></div>';
    return `<div class="links-grid">${results.map(c => `
      <div class="link-card">
        <div class="link-icon" style="background:${c.cat.gradient}">🏢</div>
        <div class="link-info">
          <div class="link-title">${c.name}</div>
          <div class="link-url">${c.cat.name}</div>
        </div>
        <button class="btn btn-icon-sm btn-primary" onclick="App.openLink('${c.url}','${c.id}',event)">↗</button>
      </div>`).join('')}</div>`;
  },

  // ---- SEARCH PAGE ----
  renderSearchPage(query) {
    const el = document.getElementById('search-results');
    if (!el) return;
    if (!query || query.trim().length < 1) {
      el.innerHTML = `<div class="empty-state" style="padding-top:48px;">
        <div class="empty-icon">🔍</div><div class="empty-title">Search ECE Career Hub</div>
        <div class="empty-desc">Search domains, projects, companies, tools...</div></div>`;
      return;
    }
    const results = Search.search(query);
    if (results.length === 0) {
      el.innerHTML = `<div class="empty-state"><div class="empty-icon">😕</div>
        <div class="empty-title">No results for "${query}"</div>
        <div class="empty-desc">Try: VLSI, FIR Filter, Arduino, MIMO, PID, Cadence...</div></div>`;
      return;
    }
    el.innerHTML = `
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">
        ${results.length} result${results.length!==1?'s':''} for "<strong style="color:var(--text-primary);">${query}</strong>"
      </p>
      ${results.map(r => `
        <div class="search-result-item" onclick="App.openSearchResult('${r.type}','${r.id}','${r.subtype||''}')">
          <div class="search-result-type">${r.typeLabel}</div>
          <div class="search-result-title">${r.icon} ${r.title}</div>
          ${r.subtitle ? `<div class="search-result-sub">${r.subtitle}</div>` : ''}
        </div>`).join('')}
    `;
  },

  openSearchResult(type, id, subtype) {
    if (type === 'category') {
      App.openCategory(id);
    } else if (type === 'project') {
      Router.navigate('projects');
      const proj = ALL_ECE_PROJECTS.find(p => p.id === id);
      if (proj) {
        this._currentProjectDomain = proj.domain;
        this._currentProjectLevel = 'All';
        setTimeout(() => {
          App.renderProjectsPage(proj.domain, 'All');
          setTimeout(() => {
            const el = document.getElementById(`proj-${id}`);
            if (el) {
              el.scrollIntoView({ behavior:'smooth', block:'center' });
              el.style.boxShadow = 'var(--shadow-glow)';
              el.style.borderColor = 'var(--accent-primary)';
              setTimeout(() => { el.style.boxShadow=''; el.style.borderColor=''; }, 2000);
            }
          }, 300);
        }, 200);
      }
    } else if (type === 'company') {
      App.openCategory(subtype);
    }
  },

  // ---- FAB ----
  initFab() {
    const fab = document.getElementById('fab');
    if (!fab) return;
    fab.addEventListener('click', () => {
      if (Router.currentPage === 'projects') { window.scrollTo({ top:0, behavior:'smooth' }); }
      else { Router.navigate('projects'); }
    });
  },

  // ---- INSTALL BANNER ----
  initInstallBanner() {
    const banner = document.getElementById('install-banner');
    if (!banner) return;
    document.getElementById('install-close')?.addEventListener('click', e => { e.stopPropagation(); banner.style.display='none'; });
    banner.addEventListener('click', async () => {
      if (App.deferredInstallPrompt) {
        App.deferredInstallPrompt.prompt();
        const r = await App.deferredInstallPrompt.userChoice;
        if (r.outcome === 'accepted') { UI.showToast('App installed! 🎉','success'); banner.style.display='none'; }
        App.deferredInstallPrompt = null;
      }
    });
    if (window.matchMedia('(display-mode: standalone)').matches) banner.style.display='none';
  },

  // ---- HOME SEARCH ----
  initHomeSearch() {
    const input = document.getElementById('home-search-input');
    if (!input) return;
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = input.value.trim();
        if (q.length > 0) {
          Router.navigate('search', { query: q });
          const si = document.getElementById('global-search-input');
          if (si) si.value = q;
          App.renderSearchPage(q);
        }
      }, 300);
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) { Router.navigate('search', { query:q }); App.renderSearchPage(q); }
      }
    });
  },

  // ---- BOTTOM NAV ----
  initBottomNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        Router.navigate(page);
      });
      UI.addRipple(item);
    });
  },

  // ---- SETTINGS ----
  initSettings() {
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => {
        UI.applyTheme(btn.dataset.theme);
        UI.showToast(`Theme: ${btn.dataset.theme} mode`, 'success');
      });
    });

    document.getElementById('clear-data-btn')?.addEventListener('click', () => {
      const modal = UI.openModal(`
        <h3 style="font-size:1rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">⚠️ Clear All Data?</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:16px;">
          This removes favorites, notes, bookmarks, and history. Theme is kept.
        </p>
        <div style="display:flex;gap:8px;justify-content:flex-end;">
          <button class="btn btn-secondary" id="cancel-clear">Cancel</button>
          <button class="btn btn-primary" id="confirm-clear" style="background:linear-gradient(135deg,#ff4444,#ff0000);">🗑️ Clear</button>
        </div>
      `, true);
      modal.querySelector('#cancel-clear').onclick = () => UI.closeModal(modal);
      modal.querySelector('#confirm-clear').onclick = () => {
        Storage.clear(); UI.closeModal(modal); UI.showToast('Data cleared','success'); App.renderHomePage();
      };
    });

    // Project domain tabs
    document.querySelectorAll('.domain-tab').forEach(btn => {
      btn.addEventListener('click', () => App.renderProjectsPage(btn.dataset.domain, 'All'));
      UI.addRipple(btn);
    });

    // Project level chips
    document.querySelectorAll('#proj-level-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => App.renderProjectsPage(this._currentProjectDomain, chip.dataset.level));
      UI.addRipple(chip);
    });

    // Projects search
    let pTimer;
    document.getElementById('projects-search')?.addEventListener('input', () => {
      clearTimeout(pTimer);
      pTimer = setTimeout(() => App.renderProjectsPage(), 300);
    });

    // Global search
    const gs = document.getElementById('global-search-input');
    let gsTimer;
    gs?.addEventListener('input', () => {
      clearTimeout(gsTimer);
      gsTimer = setTimeout(() => App.renderSearchPage(gs.value.trim()), 300);
    });
    gs?.addEventListener('keydown', e => { if (e.key==='Enter') App.renderSearchPage(gs.value.trim()); });
  },

  exportData() {
    const data = { favorites: Storage.getFavorites(), notes: Storage.get('ece-notes',{}), bookmarkedLinks: Storage.getBookmarkedLinks(), exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='ece-career-hub-data.json'; a.click();
    URL.revokeObjectURL(url);
    UI.showToast('Data exported! 📤','success');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
