// Shinra Tensei Icon Synthesizer
// Adapts the 656 industry-standard vector icons into the Shinra Tensei color palette
const fs = require('fs');
const path = require('path');

const CATPPUCCIN_DIR = '/home/andres/.vscode/extensions/catppuccin.catppuccin-vsc-icons-1.26.0/dist/macchiato';
const TARGET_ICONS_DIR = path.join(__dirname, '..', 'icons');
const MANIFEST_PATH = path.join(TARGET_ICONS_DIR, 'shinra-tensei-icons.json');

// Color map: Catppuccin Macchiato -> Shinra Tensei (Rinnegan & Akatsuki)
const COLOR_MAP = [
  // Bases & Neutrals
  ['#cad3f5', '#E4DEEE'], // Primary text / folder strokes
  ['#b8c0e0', '#D9CEE8'], // Subtext 1
  ['#a5adcb', '#B3A7C2'], // Subtext 0
  ['#6e738d', '#6F6880'], // Overlay
  ['#5b6078', '#554C64'],
  ['#494d64', '#3A3448'],
  ['#363a4f', '#251F31'],
  ['#24273a', '#191522'],
  ['#1e2030', '#16131D'],
  ['#181926', '#131118'], // Canvas dark

  // Accents & Chakras
  ['#c6a0f6', '#C3A6E1'], // Soft Mauve
  ['#b7bdf8', '#BFA5D9'], // Rinnegan Lilac
  ['#ed8796', '#ED7882'], // Akatsuki Coral
  ['#ee99a0', '#F08993'], // Light Coral
  ['#f5a97f', '#E5C07B'], // Warm Amber
  ['#eed49f', '#E5C07B'], // Sunset Amber
  ['#a6da95', '#A6D189'], // Sage Chakra Green
  ['#8bd5ca', '#81D4C8'], // Rain Teal
  ['#91d7e3', '#89DCEB'], // Calm Mist Cyan
  ['#8aadf4', '#89DCEB'], // Mist Cyan
  ['#f4dbd6', '#D9CEE8']  // Mist Light
];

function transformColors(svgContent) {
  let result = svgContent;
  for (const [catColor, shinraColor] of COLOR_MAP) {
    // Replace lowercase and uppercase hex
    result = result.replaceAll(catColor, shinraColor);
    result = result.replaceAll(catColor.toUpperCase(), shinraColor);
  }
  return result;
}

function buildIcons() {
  console.log('⚡ Starting Shinra Tensei Icon Synthesis...');

  if (!fs.existsSync(CATPPUCCIN_DIR)) {
    console.error('Error: Catppuccin source not found at', CATPPUCCIN_DIR);
    process.exit(1);
  }

  if (!fs.existsSync(TARGET_ICONS_DIR)) {
    fs.mkdirSync(TARGET_ICONS_DIR, { recursive: true });
  }

  // 1. Read base Catppuccin theme.json
  const sourceTheme = JSON.parse(
    fs.readFileSync(path.join(CATPPUCCIN_DIR, 'theme.json'), 'utf8')
  );

  // 2. Process all SVGs
  const sourceIconsDir = path.join(CATPPUCCIN_DIR, 'icons');
  const files = fs.readdirSync(sourceIconsDir).filter(f => f.endsWith('.svg'));

  let count = 0;
  for (const file of files) {
    const rawSvg = fs.readFileSync(path.join(sourceIconsDir, file), 'utf8');
    const themedSvg = transformColors(rawSvg);
    fs.writeFileSync(path.join(TARGET_ICONS_DIR, file), themedSvg, 'utf8');
    count++;
  }
  console.log(`✔ Synthesized ${count} professional vector icons in Shinra Tensei palette.`);

  // 3. Adapt iconDefinitions in theme.json so paths point to ./<file>.svg
  const manifest = {
    hidesExplorerArrows: false,
    file: sourceTheme.file || '_file',
    folder: sourceTheme.folder || '_folder',
    folderExpanded: sourceTheme.folderExpanded || '_folder_open',
    rootFolder: sourceTheme.rootFolder || '_root',
    rootFolderExpanded: sourceTheme.rootFolderExpanded || '_root_open',
    folderNames: sourceTheme.folderNames || {},
    folderNamesExpanded: sourceTheme.folderNamesExpanded || {},
    fileExtensions: sourceTheme.fileExtensions || {},
    fileNames: sourceTheme.fileNames || {},
    languageIds: sourceTheme.languageIds || {},
    iconDefinitions: {}
  };

  for (const [key, def] of Object.entries(sourceTheme.iconDefinitions)) {
    const filename = path.basename(def.iconPath);
    manifest.iconDefinitions[key] = {
      iconPath: `./${filename}`
    };
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`✔ Generated master manifest at: ${MANIFEST_PATH}`);
  console.log('🚀 Shinra Tensei Icons build complete!');
}

if (require.main === module) {
  buildIcons();
}

module.exports = buildIcons;
