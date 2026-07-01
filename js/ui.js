/* ============================================
   ECE CAREER HUB - UI UTILITIES
   Ripples, toasts, modals, theming
   ============================================ */

const UI = {
  // ---- Ripple Effect ----
  addRipple(element) {
    element.classList.add('ripple-container');
    element.addEventListener('click', function(e) {
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      element.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  },

  addRippleToAll(selector) {
    document.querySelectorAll(selector).forEach(el => this.addRipple(el));
  },

  // ---- Toast ----
  toastQueue: [],

  showToast(message, type = 'info', duration = 3000) {
    const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌', bookmark: '🔖', heart: '❤️' };
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // ---- Theme ----
  applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
    Storage.setTheme(theme);
    this.updateThemeButtons(theme);
  },

  updateThemeButtons(theme) {
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  },

  // ---- Scroll to Top ----
  initScrollTop() {
    const btn = document.getElementById('scroll-top-btn');
    const container = document.getElementById('page-container');
    if (!btn || !container) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  // ---- Pull to Refresh ----
  initPullToRefresh() {
    let startY = 0;
    let pulling = false;

    document.addEventListener('touchstart', (e) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
        pulling = true;
      }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      if (!pulling) return;
      const dy = e.touches[0].clientY - startY;
      if (dy > 80) {
        UI.showToast('Refreshed! ✨', 'success', 1500);
        pulling = false;
      }
    }, { passive: true });

    document.addEventListener('touchend', () => { pulling = false; });
  },

  // ---- Skeleton Loading ----
  showSkeleton(container, count = 4, type = 'card') {
    const templates = {
      card: `<div class="skeleton" style="height:140px;border-radius:20px;"></div>`,
      list: `<div class="skeleton" style="height:70px;border-radius:16px;"></div>`,
      project: `<div class="skeleton" style="height:220px;border-radius:20px;"></div>`
    };
    container.innerHTML = Array(count).fill(templates[type] || templates.card)
      .map(t => `<div style="margin-bottom:10px;">${t}</div>`).join('');
  },

  // ---- Modal ----
  openModal(contentHTML, centered = false) {
    const overlay = document.createElement('div');
    overlay.className = `modal-overlay${centered ? ' modal-center' : ''}`;
    overlay.innerHTML = `
      <div class="${centered ? 'modal-card' : 'bottom-sheet'}">
        <div class="modal-handle"></div>
        ${contentHTML}
      </div>
    `;
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeModal(overlay);
    });
    document.body.appendChild(overlay);
    return overlay;
  },

  closeModal(overlay) {
    if (overlay) {
      overlay.style.animation = 'fadeIn 0.2s ease reverse';
      setTimeout(() => overlay.remove(), 200);
    }
  },

  // ---- Notes Modal ----
  openNotesModal(projectId, projectTitle) {
    const savedNote = Storage.getNote(projectId);
    const modal = this.openModal(`
      <h3 style="font-size:1rem;font-weight:700;color:var(--text-primary);margin-bottom:12px;">
        📝 Notes — ${projectTitle}
      </h3>
      <textarea class="notes-area" id="note-input" placeholder="Write your notes, ideas, or observations here...">${savedNote}</textarea>
      <div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end;">
        <button class="btn btn-secondary" id="note-cancel">Cancel</button>
        <button class="btn btn-primary" id="note-save">💾 Save</button>
      </div>
    `);

    modal.querySelector('#note-cancel').onclick = () => this.closeModal(modal);
    modal.querySelector('#note-save').onclick = () => {
      const text = modal.querySelector('#note-input').value;
      Storage.saveNote(projectId, text);
      this.closeModal(modal);
      this.showToast('Notes saved! 📝', 'success');
    };
  },

  // ---- Format difficulty ----
  diffClass(difficulty) {
    const map = { 'Beginner': 'diff-beginner', 'Intermediate': 'diff-intermediate', 'Advanced': 'diff-advanced' };
    return map[difficulty] || 'badge-muted';
  }
};
