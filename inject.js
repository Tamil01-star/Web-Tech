const fs = require('fs');

try {
    let code = fs.readFileSync('js/data.js', 'utf8');

    const p1 = JSON.parse(fs.readFileSync('projects_p1.json', 'utf8'));
    const p2 = JSON.parse(fs.readFileSync('projects_p2.json', 'utf8'));
    const p3 = JSON.parse(fs.readFileSync('projects_p3.json', 'utf8'));

    const allNew = [...p1, ...p2, ...p3];

    let objectsStr = allNew.map(p => {
        return `  { id:'${p.id}', domain:'${p.domain}', level:'${p.level}', title:'${p.title.replace(/'/g, "\\'")}', tools:'${p.tools.replace(/'/g, "\\'")}', desc:'${p.desc.replace(/'/g, "\\'")}' }`;
    }).join(',\n');

    // Find the end of ALL_ECE_PROJECTS array
    const endOfArray = code.indexOf('];\n\n// ---- ECE JOBS & INTERNSHIPS ----');
    if (endOfArray !== -1) {
        code = code.substring(0, endOfArray) + ',\n\n  // ======== TAKEOFF EDU GROUP PROJECTS (NEW) ========\n' + objectsStr + '\n' + code.substring(endOfArray);
        fs.writeFileSync('js/data.js', code);
        console.log('Successfully injected ' + allNew.length + ' new projects!');
    } else {
        // Fallback search
        const fallback = code.lastIndexOf('];', code.indexOf('const DLI_COMPANIES') !== -1 ? code.indexOf('const DLI_COMPANIES') : code.length);
        if (fallback !== -1) {
            code = code.substring(0, fallback) + ',\n\n  // ======== TAKEOFF EDU GROUP PROJECTS (NEW) ========\n' + objectsStr + '\n' + code.substring(fallback);
            fs.writeFileSync('js/data.js', code);
            console.log('Successfully injected via fallback! ' + allNew.length + ' projects.');
        } else {
            console.log('Could not find insertion point.');
        }
    }
} catch(e) {
    console.error(e);
}
