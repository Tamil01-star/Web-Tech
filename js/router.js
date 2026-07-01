/* ============================================
   ECE CAREER HUB - ROUTER
   Single-page app routing between pages/views
   ============================================ */

const Router = {
  currentPage: 'home',
  history: [],

  pages: {
    'home': 'home-page',
    'company': 'company-page',
    'projects': 'projects-page',
    'favorites': 'favorites-page',
    'settings': 'settings-page',
    'search': 'search-page'
  },

  navigate(pageName, data = {}) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Save history
    if (this.currentPage !== pageName) {
      this.history.push({ page: this.currentPage, data: this._currentData || {} });
    }

    const targetId = this.pages[pageName];
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    targetEl.classList.add('active');
    this.currentPage = pageName;
    this._currentData = data;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update bottom nav
    this.updateNav(pageName);

    // Show/hide app header
    const header = document.getElementById('app-header');
    if (header) {
      header.style.display = ['home','company','projects','favorites','settings'].includes(pageName) ? '' : '';
    }

    // Render page content
    if (pageName === 'company') {
      App.renderCompanyPage(data.categoryId);
    } else if (pageName === 'favorites') {
      App.renderFavoritesPage();
    } else if (pageName === 'search') {
      App.renderSearchPage(data.query);
    } else if (pageName === 'projects') {
      App.renderProjectsPage(data.domain || App._currentProjectDomain || 'embedded', data.level || App._currentProjectLevel || 'All');
    } else if (pageName === 'home') {
      App.renderRecentlyOpened();
    }
  },

  back() {
    if (this.history.length > 0) {
      const prev = this.history.pop();
      this.navigate(prev.page, prev.data);
    } else {
      this.navigate('home');
    }
  },

  updateNav(pageName) {
    const mainPages = ['home', 'company', 'projects', 'favorites', 'settings'];
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageName);
    });
    // If on a sub-page (like search), highlight the closest parent
    if (!mainPages.includes(pageName)) {
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.page === (this._currentParent || 'home')) {
          item.classList.add('active');
        }
      });
    }
  }
};
