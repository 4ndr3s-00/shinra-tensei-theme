const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const THEMES_DIR = path.join(__dirname, '..', 'themes');

if (!fs.existsSync(THEMES_DIR)) {
  fs.mkdirSync(THEMES_DIR, { recursive: true });
}

function build() {
  const { base, soft, intense } = generate();

  const themes = [
    { filename: 'shinra-tensei-color-theme.json', data: base, label: 'Base' },
    { filename: 'shinra-tensei-soft-color-theme.json', data: soft, label: 'Soft' },
    { filename: 'shinra-tensei-intense-color-theme.json', data: intense, label: 'Intense' }
  ];

  for (const theme of themes) {
    const targetPath = path.join(THEMES_DIR, theme.filename);
    fs.writeFileSync(targetPath, JSON.stringify(theme.data, null, 2) + '\n', 'utf8');
    console.log(`✔ Generated ${theme.label}: ${theme.filename}`);
  }

  console.log('\n🚀 All 3 Shinra Tensei themes successfully built!');
}

if (require.main === module) {
  build();
}

module.exports = build;
