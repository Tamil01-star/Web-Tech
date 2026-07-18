/* ============================================
   ECE CAREER HUB - LOCAL STORAGE
   Favorites, notes, recently opened, settings
   ============================================ */

const STORAGE_KEYS = {
  THEME: 'ece-theme',
  FAVORITES: 'ece-favorites',
  NOTES: 'ece-notes',
  RECENTLY_OPENED: 'ece-recent',
  LINKS: 'ece-links',
  BOOKMARKED_PROJECTS: 'ece-proj-bookmarks',
  BOOKMARKED_CATEGORIES: 'ece-cat-bookmarks',
  SETTINGS: 'ece-settings'
};

const Storage = {
  init() {
    if (!localStorage.getItem('ece-default-favs-v2-set')) {
       let favs = this.getFavorites();
       if (!favs.projects.includes('pow-il5')) favs.projects.push('pow-il5');
       if (!favs.projects.includes('iot-a5')) favs.projects.push('iot-a5');
       if (!favs.projects.includes('py-a1')) favs.projects.push('py-a1');
       this.set(STORAGE_KEYS.FAVORITES, favs);
       localStorage.setItem('ece-default-favs-v2-set', 'true');
    }
  },

  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },

  clear() {
    const keysToKeep = ['ece-theme']; // keep theme
    const savedTheme = this.get(STORAGE_KEYS.THEME);
    localStorage.clear();
    if (savedTheme) this.set(STORAGE_KEYS.THEME, savedTheme);
  },

  // Theme
  getTheme() { return this.get(STORAGE_KEYS.THEME, 'amber-texture'); },
  setTheme(theme) { this.set(STORAGE_KEYS.THEME, theme); },

  // Favorites (categories and projects)
  getFavorites() { return this.get(STORAGE_KEYS.FAVORITES, { categories: [], projects: [] }); },

  toggleFavoriteCategory(categoryId) {
    const favs = this.getFavorites();
    const idx = favs.categories.indexOf(categoryId);
    if (idx > -1) { favs.categories.splice(idx, 1); }
    else { favs.categories.push(categoryId); }
    this.set(STORAGE_KEYS.FAVORITES, favs);
    return idx === -1; // true = added
  },

  toggleFavoriteProject(projectId) {
    const favs = this.getFavorites();
    const idx = favs.projects.indexOf(projectId);
    if (idx > -1) { favs.projects.splice(idx, 1); }
    else { favs.projects.push(projectId); }
    this.set(STORAGE_KEYS.FAVORITES, favs);
    return idx === -1;
  },

  isCategoryFavorite(categoryId) {
    return this.getFavorites().categories.includes(categoryId);
  },

  isProjectFavorite(projectId) {
    return this.getFavorites().projects.includes(projectId);
  },

  // Notes per project
  getNote(projectId) {
    const notes = this.get(STORAGE_KEYS.NOTES, {});
    return notes[projectId] || '';
  },

  saveNote(projectId, text) {
    const notes = this.get(STORAGE_KEYS.NOTES, {});
    notes[projectId] = text;
    this.set(STORAGE_KEYS.NOTES, notes);
  },

  // Recently opened categories
  getRecentlyOpened() { return this.get(STORAGE_KEYS.RECENTLY_OPENED, []); },

  addRecentlyOpened(categoryId) {
    let recent = this.getRecentlyOpened();
    recent = recent.filter(id => id !== categoryId);
    recent.unshift(categoryId);
    recent = recent.slice(0, 10);
    this.set(STORAGE_KEYS.RECENTLY_OPENED, recent);
  },

  // Custom link data (user pasted URLs)
  getLinks(categoryId) {
    const all = this.get(STORAGE_KEYS.LINKS, {});
    return all[categoryId] || null;
  },

  saveLinks(categoryId, links) {
    const all = this.get(STORAGE_KEYS.LINKS, {});
    all[categoryId] = links;
    this.set(STORAGE_KEYS.LINKS, all);
  },

  // Bookmarked link cards
  getBookmarkedLinks() { return this.get('ece-bookmarked-links', []); },

  toggleBookmarkLink(linkId) {
    const bookmarks = this.getBookmarkedLinks();
    const idx = bookmarks.indexOf(linkId);
    if (idx > -1) { bookmarks.splice(idx, 1); }
    else { bookmarks.push(linkId); }
    this.set('ece-bookmarked-links', bookmarks);
    return idx === -1;
  },

  isLinkBookmarked(linkId) {
    return this.getBookmarkedLinks().includes(linkId);
  }
};
