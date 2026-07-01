/* ============================================
   ECE CAREER HUB - SEARCH
   Global search across categories and projects
   ============================================ */

const Search = {
  query: '',

  search(query) {
    if (!query || query.trim().length < 1) return [];
    const q = query.toLowerCase().trim();
    const results = [];

    // Search categories
    ECE_CATEGORIES.forEach(cat => {
      if (cat.name.toLowerCase().includes(q) || cat.desc.toLowerCase().includes(q)) {
        results.push({
          type: 'category',
          typeLabel: 'Career Domain',
          id: cat.id,
          title: cat.name,
          subtitle: cat.desc,
          icon: cat.icon,
          data: cat
        });
      }
    });

    // Search embedded projects
    EMBEDDED_PROJECTS.forEach(proj => {
      if (
        proj.title.toLowerCase().includes(q) ||
        proj.problem.toLowerCase().includes(q) ||
        proj.solution.toLowerCase().includes(q) ||
        (proj.components || []).some(c => c.toLowerCase().includes(q)) ||
        (proj.applications || []).some(a => a.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'project',
          typeLabel: 'Embedded Project',
          id: proj.id,
          title: proj.title,
          subtitle: proj.applications ? proj.applications.slice(0,2).join(' • ') : '',
          icon: '🔬',
          data: proj
        });
      }
    });

    // Search VLSI projects
    VLSI_PROJECTS.forEach(proj => {
      if (
        proj.title.toLowerCase().includes(q) ||
        proj.problem.toLowerCase().includes(q) ||
        proj.solution.toLowerCase().includes(q) ||
        (proj.applications || []).some(a => a.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'project',
          typeLabel: 'VLSI Project',
          id: proj.id,
          title: proj.title,
          subtitle: proj.applications ? proj.applications.slice(0,2).join(' • ') : '',
          icon: '💎',
          data: proj
        });
      }
    });

    return results.slice(0, 30);
  }
};
