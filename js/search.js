/* ============================================
   ECE CAREER HUB - SEARCH v2.0
   Searches categories, projects, companies
   ============================================ */

const Search = {
  search(query) {
    if (!query || query.trim().length < 1) return [];
    const q = query.toLowerCase().trim();
    const results = [];

    // Search ECE categories
    ECE_CATEGORIES.forEach(cat => {
      if (cat.name.toLowerCase().includes(q) || cat.desc.toLowerCase().includes(q)) {
        results.push({ type:'category', typeLabel:'Career Domain', id:cat.id, title:cat.name, subtitle:cat.desc, icon:cat.icon });
      }
    });

    // Search all real project data
    ALL_ECE_PROJECTS.forEach(proj => {
      if (
        proj.title.toLowerCase().includes(q) ||
        proj.desc.toLowerCase().includes(q) ||
        proj.tools.toLowerCase().includes(q)
      ) {
        const dom = PROJECT_DOMAINS.find(d => d.id === proj.domain);
        results.push({
          type:'project', typeLabel:`${dom?.name||'Project'} — ${proj.level}`,
          id:proj.id, title:proj.title,
          subtitle:`${proj.level} • ${proj.tools.split(',')[0]}`,
          icon: dom?.icon || '📐'
        });
      }
    });

    // Search companies
    ECE_CATEGORIES.forEach(cat => {
      (COMPANY_DATA[cat.id]||[]).forEach(c => {
        if (c.name.toLowerCase().includes(q) || (c.desc||'').toLowerCase().includes(q)) {
          results.push({
            type:'company', typeLabel:`Company — ${cat.name}`,
            id:c.id, title:c.name,
            subtitle:c.desc || c.url,
            icon:'🏢', subtype: cat.id
          });
        }
      });
    });

    return results.slice(0, 40);
  }
};
