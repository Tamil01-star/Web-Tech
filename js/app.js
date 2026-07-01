/* ============================================
   ECE CAREER HUB - MAIN APPLICATION
   Core app logic, rendering, and initialization
   ============================================ */

const App = {
  // ---- PWA Install ----
  deferredInstallPrompt: null,

  // ---- Init ----
  init() {
    // Apply theme first
    const savedTheme = Storage.getTheme();
    UI.applyTheme(savedTheme);

    // Watch system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (Storage.getTheme() === 'system') UI.applyTheme('system');
    });

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    // PWA install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      App.deferredInstallPrompt = e;
      document.getElementById('install-banner')?.classList.remove('hidden');
    });

    // Render home page
    this.renderHomePage();

    // Bottom nav
    this.initBottomNav();

    // Scroll top button
    UI.initScrollTop();

    // Pull to refresh
    UI.initPullToRefresh();

    // Home search
    this.initHomeSearch();

    // Settings page
    this.initSettings();

    // FAB
    this.initFab();

    // Install banner
    this.initInstallBanner();

    // Loading screen
    setTimeout(() => {
      const ls = document.getElementById('loading-screen');
      if (ls) {
        ls.classList.add('hide');
        setTimeout(() => ls.remove(), 500);
      }
    }, 1200);

    // Nav back gesture
    window.addEventListener('popstate', () => Router.back());
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
    el.innerHTML = `
      <div class="hero-stat">
        <div class="stat-num">${ECE_CATEGORIES.length}</div>
        <div class="stat-label">Domains</div>
      </div>
      <div class="hero-stat">
        <div class="stat-num">${EMBEDDED_PROJECTS.length + VLSI_PROJECTS.length}+</div>
        <div class="stat-label">Projects</div>
      </div>
      <div class="hero-stat">
        <div class="stat-num">${ECE_CATEGORIES.reduce((a,c)=>a+c.linkCount,0)}+</div>
        <div class="stat-label">Links</div>
      </div>
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
           role="button" tabindex="0" 
           aria-label="Open ${cat.name}">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-name">${cat.name}</span>
        <span class="category-count">${cat.linkCount} links</span>
      </div>
    `).join('');

    // Ripple
    grid.querySelectorAll('.category-card').forEach(el => UI.addRipple(el));
  },

  renderRecentlyOpened() {
    const container = document.getElementById('recently-opened');
    const section = document.getElementById('recent-section');
    if (!container || !section) return;

    const recent = Storage.getRecentlyOpened();
    if (recent.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = '';
    container.innerHTML = recent.map(id => {
      const cat = ECE_CATEGORIES.find(c => c.id === id);
      if (!cat) return '';
      return `
        <div class="recent-chip ripple-container" onclick="App.openCategory('${cat.id}')">
          ${cat.icon} ${cat.name}
        </div>
      `;
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

    // Get saved links or defaults
    let links = Storage.getLinks(categoryId) || CATEGORY_LINKS[categoryId];

    page.innerHTML = `
      <!-- Header -->
      <div class="page-header" style="background:transparent;border:none;padding:12px 16px 0;">
        <button class="back-btn" onclick="Router.back()" aria-label="Go back">←</button>
        <h1>${cat.icon} ${cat.name}</h1>
        <button class="fav-btn ${isFav ? 'active' : ''}" 
                id="cat-fav-btn"
                onclick="App.toggleCategoryFavorite('${categoryId}')"
                title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          ${isFav ? '⭐' : '☆'}
        </button>
      </div>

      <!-- Hero -->
      <div class="company-page-hero" style="background:${cat.gradient};margin:12px 16px;border-radius:24px;">
        <span class="company-page-icon">${cat.icon}</span>
        <h2 class="company-page-title" style="color:#fff;">${cat.name}</h2>
        <p class="company-page-sub" style="color:rgba(255,255,255,0.85);">${cat.desc}</p>
      </div>

      <!-- Search -->
      <div style="padding:0 16px 8px;">
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" id="company-search" placeholder="Search links..." aria-label="Search company links">
          <button class="btn btn-icon-sm btn-ghost" id="company-filter-btn" title="Filter">⚙</button>
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="filter-chips" id="company-filter-chips">
        <div class="chip active" data-filter="all">All</div>
        <div class="chip" data-filter="bookmarked">⭐ Bookmarked</div>
        <div class="chip" data-filter="visited">🕐 Recently Opened</div>
      </div>

      <!-- Recently Opened within category -->
      <div id="company-recent-section" style="padding:0 16px 8px;display:none;">
        <p class="section-title" style="margin-bottom:8px;">Recently Opened</p>
        <div class="recent-scroll" id="company-recent-links"></div>
      </div>

      <!-- Links Grid -->
      <div style="padding:0 16px 8px;">
        <p class="section-title">Company Links</p>
        <div class="links-grid card-grid" id="company-links-grid">
          ${links.map((link, i) => this.renderLinkCard(link, i, cat)).join('')}
        </div>
      </div>

      <!-- Add More placeholder -->
      <div style="text-align:center;padding:12px 16px 24px;">
        <p style="font-size:0.78rem;color:var(--text-muted);">
          💡 Edit the source to paste company URLs into placeholder cards
        </p>
      </div>
    `;

    // Search within company page
    const searchInput = page.querySelector('#company-search');
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      page.querySelectorAll('.link-card').forEach(card => {
        const title = card.querySelector('.link-title')?.textContent.toLowerCase() || '';
        card.style.display = title.includes(q) ? '' : 'none';
      });
    });

    // Filter chips
    page.querySelectorAll('.chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        page.querySelectorAll('.chip[data-filter]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.dataset.filter;
        page.querySelectorAll('.link-card').forEach(card => {
          const isBookmarked = card.dataset.bookmarked === 'true';
          if (filter === 'all') card.style.display = '';
          else if (filter === 'bookmarked') card.style.display = isBookmarked ? '' : 'none';
          else card.style.display = '';
        });
        UI.addRipple(chip);
      });
      UI.addRipple(chip);
    });

    // Add ripple to all link cards
    page.querySelectorAll('.link-card').forEach(el => UI.addRipple(el));
  },

  renderLinkCard(link, index, cat) {
    const isBookmarked = Storage.isLinkBookmarked(link.id);
    const hasUrl = link.url && link.url.trim() !== '';
    return `
      <div class="link-card ripple-container" 
           data-id="${link.id}" 
           data-bookmarked="${isBookmarked}"
           id="link-card-${link.id}">
        <div class="link-icon" style="background:${cat.gradient}">🔗</div>
        <div class="link-info">
          <div class="link-title">${link.title}</div>
          <div class="link-url">${hasUrl ? link.url : 'Paste URL here'}</div>
        </div>
        <div class="link-actions">
          <button class="btn btn-icon-sm btn-ghost bookmark-btn ${isBookmarked ? 'active' : ''}"
                  onclick="App.toggleLinkBookmark('${link.id}', event)"
                  title="${isBookmarked ? 'Remove bookmark' : 'Bookmark'}"
                  style="color:${isBookmarked ? '#FFD700' : 'var(--text-muted)'};">
            ${isBookmarked ? '⭐' : '☆'}
          </button>
          <button class="btn btn-icon-sm btn-primary open-link-btn"
                  onclick="App.openLink('${link.url}', '${link.id}', event)"
                  title="Open link"
                  ${!hasUrl ? 'disabled style="opacity:0.5;"' : ''}>
            ↗
          </button>
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
      if (btn) {
        btn.style.color = added ? '#FFD700' : 'var(--text-muted)';
        btn.textContent = added ? '⭐' : '☆';
      }
    }
    UI.showToast(added ? 'Link bookmarked! ⭐' : 'Bookmark removed', added ? 'bookmark' : 'info');
  },

  openLink(url, linkId, e) {
    e?.stopPropagation();
    if (!url || url.trim() === '') {
      UI.showToast('No URL set for this link', 'warning');
      return;
    }
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
      UI.showToast('Opening link...', 'info', 1500);
    } catch {
      UI.showToast('Could not open link', 'error');
    }
  },

  toggleCategoryFavorite(categoryId) {
    const added = Storage.toggleFavoriteCategory(categoryId);
    const btn = document.getElementById('cat-fav-btn');
    if (btn) {
      btn.textContent = added ? '⭐' : '☆';
      btn.classList.toggle('active', added);
    }
    UI.showToast(added ? 'Added to favorites! ⭐' : 'Removed from favorites', added ? 'heart' : 'info');
  },

  // ---- PROJECTS PAGE ----
  renderProjectsPage(tab = 'embedded') {
    const grid = document.getElementById('projects-grid');
    const tabs = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('projects-search');

    if (!grid) return;

    // Update tabs
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));

    // Filter
    let projects = tab === 'embedded' ? EMBEDDED_PROJECTS : VLSI_PROJECTS;
    const q = searchInput?.value?.toLowerCase() || '';
    if (q) {
      projects = projects.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        (p.applications || []).some(a => a.toLowerCase().includes(q))
      );
    }

    // Active difficulty filter
    const activeFilter = document.querySelector('#projects-filter-chips .chip.active')?.dataset?.diff;
    if (activeFilter && activeFilter !== 'all') {
      projects = projects.filter(p => p.difficulty.toLowerCase() === activeFilter.toLowerCase());
    }

    grid.innerHTML = projects.length > 0
      ? projects.map(p => this.renderProjectCard(p)).join('')
      : `<div class="empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-title">No projects found</div>
          <div class="empty-desc">Try adjusting your search or filter</div>
        </div>`;

    grid.querySelectorAll('.project-card').forEach(el => UI.addRipple(el));

    // Store current tab
    this._currentProjectTab = tab;
  },

  renderProjectCard(proj) {
    const isFav = Storage.isProjectFavorite(proj.id);
    const hasNote = Storage.getNote(proj.id).length > 0;

    return `
      <div class="project-card" id="proj-card-${proj.id}">
        <div class="project-header">
          <div class="project-header-bg"></div>
          <div class="project-title">${proj.title}</div>
          <div class="project-badges">
            <span class="badge ${UI.diffClass(proj.difficulty)}">${proj.difficulty}</span>
            <span class="badge badge-muted">💰 ${proj.cost}</span>
            ${hasNote ? '<span class="badge badge-info">📝 Notes</span>' : ''}
          </div>
        </div>
        <div class="project-body">
          <div class="project-field">
            <div class="project-field-label">❓ Problem Statement</div>
            <div class="project-field-value">${proj.problem}</div>
          </div>
          <div class="project-field">
            <div class="project-field-label">💡 Solution</div>
            <div class="project-field-value">${proj.solution}</div>
          </div>
          ${proj.components && proj.components.length > 0 ? `
          <div class="project-field">
            <div class="project-field-label">🔧 Components</div>
            <div class="project-field-value">
              ${proj.components.map(c => `<span class="badge badge-muted" style="margin:2px 2px 2px 0;display:inline-flex;">${c}</span>`).join('')}
            </div>
          </div>` : ''}
          ${proj.software && proj.software.length > 0 ? `
          <div class="project-field">
            <div class="project-field-label">💻 Software Used</div>
            <div class="project-field-value">${proj.software.join(' • ')}</div>
          </div>` : ''}
          <div class="project-field">
            <div class="project-field-label">🧠 AI Integration</div>
            <div class="project-field-value">${proj.ai}</div>
          </div>
          ${proj.applications && proj.applications.length > 0 ? `
          <div class="project-field">
            <div class="project-field-label">🚀 Applications</div>
            <div class="project-field-value">${proj.applications.join(' • ')}</div>
          </div>` : ''}
        </div>
        <div class="project-footer">
          <button class="btn btn-ghost btn-icon fav-btn ${isFav ? 'active' : ''}"
                  onclick="App.toggleProjectFavorite('${proj.id}')"
                  title="${isFav ? 'Remove from favorites' : 'Save project'}"
                  style="color:${isFav ? '#FFD700' : 'var(--text-muted)'};">
            ${isFav ? '⭐' : '☆'}
          </button>
          <button class="btn btn-secondary" style="flex:1;font-size:0.8rem;"
                  onclick="UI.openNotesModal('${proj.id}', '${proj.title.replace(/'/g,"\\'")}')">
            📝 ${hasNote ? 'Edit Notes' : 'Add Notes'}
          </button>
          <button class="btn btn-primary" style="font-size:0.8rem;"
                  onclick="App.shareProject('${proj.id}')">
            Share
          </button>
        </div>
      </div>
    `;
  },

  toggleProjectFavorite(projectId) {
    const added = Storage.toggleFavoriteProject(projectId);
    // Update button in current view
    const card = document.getElementById(`proj-card-${projectId}`);
    if (card) {
      const btn = card.querySelector('.fav-btn');
      if (btn) {
        btn.textContent = added ? '⭐' : '☆';
        btn.classList.toggle('active', added);
        btn.style.color = added ? '#FFD700' : 'var(--text-muted)';
      }
    }
    UI.showToast(added ? 'Project saved to favorites! ⭐' : 'Removed from favorites', added ? 'heart' : 'info');
  },

  exportData() {
    const data = {
      favorites: Storage.getFavorites(),
      notes: Storage.get(STORAGE_KEYS.NOTES, {}),
      bookmarkedLinks: Storage.getBookmarkedLinks(),
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ece-career-hub-data.json';
    a.click();
    URL.revokeObjectURL(url);
    UI.showToast('Data exported! 📤', 'success');
  },

  shareProject(projectId) {
    const proj = ALL_PROJECTS.find(p => p.id === projectId);
    if (!proj) return;
    if (navigator.share) {
      navigator.share({
        title: proj.title,
        text: `ECE Project Idea: ${proj.title}\n\nProblem: ${proj.problem}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${proj.title}\n\n${proj.problem}`).then(() => {
        UI.showToast('Copied to clipboard!', 'success');
      }).catch(() => {
        UI.showToast('Share not available', 'warning');
      });
    }
  },

  // ---- FAVORITES PAGE ----
  renderFavoritesPage() {
    const page = document.getElementById('favorites-content') || document.getElementById('favorites-page');
    if (!page) return;

    const favs = Storage.getFavorites();
    const favCategories = ECE_CATEGORIES.filter(c => favs.categories.includes(c.id));
    const favProjects = ALL_PROJECTS.filter(p => favs.projects.includes(p.id));

    page.innerHTML = `
      <div class="section-title" style="padding:16px 0 8px;">⭐ Favorite Categories</div>
      ${favCategories.length > 0
        ? `<div class="categories-grid card-grid" style="margin-bottom:24px;">
            ${favCategories.map(cat => `
              <div class="category-card ripple-container" 
                   style="background:${cat.gradient};"
                   onclick="App.openCategory('${cat.id}')">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-name">${cat.name}</span>
              </div>`).join('')}
           </div>`
        : `<div class="empty-state" style="padding:24px;">
            <div class="empty-icon">⭐</div>
            <div class="empty-title">No favorite categories yet</div>
            <div class="empty-desc">Star categories to see them here</div>
           </div>`
      }

      <div class="divider" style="margin:8px 0 16px;"></div>

      <div class="section-title" style="margin-bottom:12px;">💡 Saved Projects</div>
      ${favProjects.length > 0
        ? `<div class="projects-grid card-grid">
            ${favProjects.map(p => this.renderProjectCard(p)).join('')}
           </div>`
        : `<div class="empty-state" style="padding:24px;">
            <div class="empty-icon">💡</div>
            <div class="empty-title">No saved projects yet</div>
            <div class="empty-desc">Star project cards to save them here</div>
           </div>`
      }

      <!-- Bookmarked Links -->
      <div class="divider" style="margin:16px 0;"></div>
      <div class="section-title" style="margin-bottom:12px;">🔖 Bookmarked Links</div>
      ${this.renderBookmarkedLinks()}
    `;

    page.querySelectorAll('.category-card').forEach(el => UI.addRipple(el));
    page.querySelectorAll('.project-card').forEach(el => UI.addRipple(el));
  },

  renderBookmarkedLinks() {
    const bookmarked = Storage.getBookmarkedLinks();
    if (bookmarked.length === 0) {
      return `<div class="empty-state" style="padding:24px;">
        <div class="empty-icon">🔖</div>
        <div class="empty-title">No bookmarked links</div>
        <div class="empty-desc">Bookmark company links to see them here</div>
      </div>`;
    }

    const links = [];
    ECE_CATEGORIES.forEach(cat => {
      const catLinks = Storage.getLinks(cat.id) || CATEGORY_LINKS[cat.id];
      catLinks.forEach(link => {
        if (bookmarked.includes(link.id)) {
          links.push({ ...link, cat });
        }
      });
    });

    if (links.length === 0) return '<div class="empty-state"><div class="empty-icon">🔖</div><div class="empty-title">No links found</div></div>';

    return `<div class="links-grid">
      ${links.map(l => `
        <div class="link-card">
          <div class="link-icon" style="background:${l.cat.gradient}">🔗</div>
          <div class="link-info">
            <div class="link-title">${l.title}</div>
            <div class="link-url">${l.cat.name}</div>
          </div>
          <button class="btn btn-icon-sm btn-primary" onclick="App.openLink('${l.url}', '${l.id}', event)">↗</button>
        </div>`).join('')}
    </div>`;
  },

  // ---- SEARCH PAGE ----
  renderSearchPage(query = '') {
    const page = document.getElementById('search-page');
    if (!page) return;

    if (!query) return;

    const results = Search.search(query);

    const resultsEl = document.getElementById('search-results');
    if (!resultsEl) return;

    if (results.length === 0) {
      resultsEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-title">No results for "${query}"</div>
          <div class="empty-desc">Try searching for category names, project titles, or keywords like "IoT", "VLSI", "motor"</div>
        </div>`;
      return;
    }

    resultsEl.innerHTML = `
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong style="color:var(--text-primary);">${query}</strong>"</p>
      ${results.map(r => `
        <div class="search-result-item" onclick="App.openSearchResult('${r.type}', '${r.id}')">
          <div class="search-result-type">${r.typeLabel}</div>
          <div class="search-result-title">${r.icon} ${r.title}</div>
          ${r.subtitle ? `<div class="search-result-sub">${r.subtitle}</div>` : ''}
        </div>`).join('')}
    `;
  },

  openSearchResult(type, id) {
    if (type === 'category') {
      Router.navigate('company', { categoryId: id });
    } else if (type === 'project') {
      const proj = ALL_PROJECTS.find(p => p.id === id);
      if (!proj) return;
      const tab = proj.category === 'embedded' ? 'embedded' : 'vlsi';
      Router.navigate('projects', { tab });
      // Scroll to and highlight the project
      setTimeout(() => {
        const el = document.getElementById(`proj-card-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.boxShadow = 'var(--shadow-glow)';
          el.style.borderColor = 'var(--accent-primary)';
          setTimeout(() => {
            el.style.boxShadow = '';
            el.style.borderColor = '';
          }, 2000);
        }
      }, 400);
    }
  },

  // ---- FAB ----
  initFab() {
    const fab = document.getElementById('fab');
    if (!fab) return;
    fab.addEventListener('click', () => {
      if (Router.currentPage === 'projects') {
        // Scroll to top of projects
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Go to projects
        Router.navigate('projects');
      }
    });
  },

  // ---- INSTALL BANNER ----
  initInstallBanner() {
    const banner = document.getElementById('install-banner');
    if (!banner) return;

    const closeBtn = document.getElementById('install-close');
    closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      banner.style.display = 'none';
    });

    banner.addEventListener('click', async () => {
      if (App.deferredInstallPrompt) {
        App.deferredInstallPrompt.prompt();
        const result = await App.deferredInstallPrompt.userChoice;
        if (result.outcome === 'accepted') {
          UI.showToast('App installed successfully! 🎉', 'success');
          banner.style.display = 'none';
        }
        App.deferredInstallPrompt = null;
      }
    });

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      banner.style.display = 'none';
    }
  },

  // ---- HOME SEARCH ----
  initHomeSearch() {
    const input = document.getElementById('home-search-input');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const q = input.value.trim();
        if (q.length > 0) {
          Router._currentParent = 'home';
          Router.navigate('search', { query: q });
          const searchInput = document.getElementById('global-search-input');
          if (searchInput) searchInput.value = q;
        }
      }, 300);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) {
          Router.navigate('search', { query: q });
        }
      }
    });
  },

  // ---- BOTTOM NAV ----
  initBottomNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        if (page === 'company') {
          // Companies nav shows the home page grid so user can pick a domain
          Router.navigate('home');
          // Scroll categories into view
          setTimeout(() => document.getElementById('categories-grid')?.scrollIntoView({ behavior: 'smooth' }), 100);
        } else {
          Router.navigate(page);
        }
      });
      UI.addRipple(item);
    });
  },

  // ---- SETTINGS ----
  initSettings() {
    // Theme options
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => {
        UI.applyTheme(btn.dataset.theme);
        UI.showToast(`Theme changed to ${btn.dataset.theme} mode`, 'success');
      });
    });

    // Clear data button
    document.getElementById('clear-data-btn')?.addEventListener('click', () => {
      const modal = UI.openModal(`
        <h3 style="font-size:1rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">⚠️ Clear All Data?</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:16px;">
          This will remove all favorites, notes, bookmarks, and recently opened history. Your theme will be kept.
        </p>
        <div style="display:flex;gap:8px;justify-content:flex-end;">
          <button class="btn btn-secondary" id="cancel-clear">Cancel</button>
          <button class="btn btn-primary" id="confirm-clear" style="background:linear-gradient(135deg,#ff4444,#ff0000);">
            🗑️ Clear All
          </button>
        </div>
      `, true);

      modal.querySelector('#cancel-clear').onclick = () => UI.closeModal(modal);
      modal.querySelector('#confirm-clear').onclick = () => {
        Storage.clear();
        UI.closeModal(modal);
        UI.showToast('All data cleared', 'success');
        App.renderHomePage();
      };
    });

    // Projects search
    const projSearch = document.getElementById('projects-search');
    let projTimer;
    projSearch?.addEventListener('input', () => {
      clearTimeout(projTimer);
      projTimer = setTimeout(() => {
        App.renderProjectsPage(App._currentProjectTab || 'embedded');
      }, 300);
    });

    // Project tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        App.renderProjectsPage(btn.dataset.tab);
      });
      UI.addRipple(btn);
    });

    // Project filter chips
    document.querySelectorAll('#projects-filter-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#projects-filter-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        App.renderProjectsPage(App._currentProjectTab || 'embedded');
      });
      UI.addRipple(chip);
    });

    // Global search page
    const globalSearch = document.getElementById('global-search-input');
    let searchTimer;
    globalSearch?.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        App.renderSearchPage(globalSearch.value.trim());
      }, 300);
    });

    globalSearch?.addEventListener('keydown', e => {
      if (e.key === 'Enter') App.renderSearchPage(globalSearch.value.trim());
    });
  }
};

// ---- START APP ----
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
