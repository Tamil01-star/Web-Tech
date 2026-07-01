# ECE Career Hub 🎓⚡

A **mobile-first Progressive Web App (PWA)** designed for Electronics and Communication Engineering (ECE) students. Works like an Android app directly in the browser — installable, offline-capable, and fully responsive.

## 🚀 Live Demo
> Host on GitHub Pages: Settings → Pages → Deploy from `main` branch → `/root`

## ✨ Features

- **20 Career Domains** — Embedded Systems, VLSI, Semiconductor, PCB Design, IoT, Robotics, Automation, Electronics Manufacturing, Automotive, FPGA, Embedded Linux, Firmware, Hardware Design, Testing & Validation, Signal Processing, Wireless Communication, AI Hardware, EV Electronics, Medical Electronics, Defence Electronics
- **160+ Company Link Placeholders** — 8 per category, ready for URL pasting
- **40 Detailed Project Ideas** — 20 Embedded + 20 VLSI with full problem/solution/components/AI/cost data
- **Global Search** — Search across all domains, projects, and components
- **Favorites & Bookmarks** — Star categories and projects, bookmark company links
- **Personal Notes** — Per-project notes saved in LocalStorage
- **Dark / Light / System Theme** — Auto-detects device preference
- **PWA Installable** — Add to home screen as an Android app
- **Offline Support** — Service Worker caches all assets
- **Material Design UI** — Ripple effects, glassmorphism, smooth animations

## 📁 Project Structure

```
├── index.html          # Main SPA with all 5 pages
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (offline cache)
├── css/
│   ├── themes.css      # Dark/Light/System CSS variables
│   ├── animations.css  # Keyframes & animation classes
│   ├── components.css  # Material Design components
│   └── main.css        # Layout & page styles
├── js/
│   ├── data.js         # 20 categories + 40 project cards
│   ├── storage.js      # LocalStorage abstraction
│   ├── search.js       # Full-text search
│   ├── ui.js           # Ripples, toasts, modals, themes
│   ├── router.js       # SPA navigation
│   └── app.js          # Core app logic
└── icons/              # PWA icons (all sizes)
```

## 🛠️ Technology Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, animations, glassmorphism
- **Vanilla JavaScript** — No frameworks, no dependencies
- **PWA** — Web App Manifest + Service Worker
- **LocalStorage** — All data stored client-side (no backend)

## 📱 Navigation

| Tab | Page |
|-----|------|
| 🏠 Home | Category grid + search + recent |
| 🏢 Companies | Company links per domain |
| 💡 Projects | Embedded & VLSI project ideas |
| ⭐ Favorites | Saved categories, projects & links |
| ⚙️ Settings | Theme, data management, about |

## 🔗 How to Add Company URLs

Open `js/data.js` and update each placeholder in `CATEGORY_LINKS`:

```javascript
{
  id: 'embedded-systems-link-1',
  title: 'Texas Instruments',
  url: 'https://www.ti.com/careers',  // ← paste your URL
  ...
}
```

## 🌐 Deployment

**GitHub Pages:**
1. Push to `main` branch
2. Go to repo Settings → Pages
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://Tamil01-star.github.io/Web-Tech/`

**No build step required** — pure static files, works anywhere.

## 📄 License

MIT — Free to use and modify for educational purposes.

---
Built with ❤️ for ECE Students
