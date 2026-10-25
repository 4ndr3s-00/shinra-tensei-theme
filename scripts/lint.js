// Shinra Tensei Linter & Integrity Verification Suite
// Validates Theme Schemas, Color Hexes, Semantic Tokens, and Icon Manifest Integrity
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const THEMES_DIR = path.join(ROOT_DIR, 'themes');
const ICONS_DIR = path.join(ROOT_DIR, 'icons');
const MANIFEST_PATH = path.join(ICONS_DIR, 'shinra-tensei-icons.json');

const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

let errorCount = 0;

function logPass(msg) {
  console.log(`  ✔ ${msg}`);
}

function logFail(msg) {
  console.error(`  ✖ ${msg}`);
  errorCount++;
}

console.log('🛡️  Running Shinra Tensei Integrity Linter...\n');

// 1. Verify Theme Files
console.log('1. Checking Color Themes...');
const themeFiles = [
  'shinra-tensei-color-theme.json',
  'shinra-tensei-soft-color-theme.json',
  'shinra-tensei-intense-color-theme.json'
];

for (const filename of themeFiles) {
  const filePath = path.join(THEMES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    logFail(`Missing theme file: ${filename}`);
    continue;
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    if (data.type !== 'dark') {
      logFail(`${filename}: type must be 'dark'`);
    }

    if (!data.semanticHighlighting) {
      logFail(`${filename}: semanticHighlighting must be true`);
    }

    if (!data.semanticTokenColors || Object.keys(data.semanticTokenColors).length === 0) {
      logFail(`${filename}: semanticTokenColors is missing or empty`);
    }

    // Check UI colors
    let colorErrors = 0;
    for (const [key, color] of Object.entries(data.colors || {})) {
      if (!color || (!HEX_COLOR_REGEX.test(color) && color !== '#00000000')) {
        logFail(`${filename}: Invalid color '${color}' at key '${key}'`);
        colorErrors++;
      }
    }

    // Check tokenColors
    let tokenErrors = 0;
    for (const token of data.tokenColors || []) {
      const fg = token.settings?.foreground;
      if (fg && !HEX_COLOR_REGEX.test(fg)) {
        logFail(`${filename}: Invalid token foreground '${fg}' in '${token.name}'`);
        tokenErrors++;
      }
    }

    if (colorErrors === 0 && tokenErrors === 0) {
      logPass(`${filename}: Valid schema (${Object.keys(data.colors).length} UI keys, ${data.tokenColors.length} tokens, ${Object.keys(data.semanticTokenColors).length} semantic rules)`);
    }
  } catch (err) {
    logFail(`${filename}: JSON parse error: ${err.message}`);
  }
}

// 2. Verify Icon Manifest & SVG Integrity
console.log('\n2. Checking Icon Suite Integrity...');
if (!fs.existsSync(MANIFEST_PATH)) {
  logFail('Missing icon manifest: shinra-tensei-icons.json');
} else {
  try {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    const defs = manifest.iconDefinitions || {};
    const defKeys = Object.keys(defs);

    let missingFiles = 0;
    for (const [key, def] of Object.entries(defs)) {
      const rel = def.iconPath;
      const targetPath = path.join(ICONS_DIR, rel);
      if (!fs.existsSync(targetPath)) {
        logFail(`Manifest definition '${key}' points to non-existent file: ${rel}`);
        missingFiles++;
      }
    }

    if (missingFiles === 0) {
      logPass(`All ${defKeys.length} manifest definitions point to valid SVG files on disk.`);
    }

    // Check SVG files on disk
    const diskSvgs = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg'));
    let invalidSvgs = 0;
    for (const svgFile of diskSvgs) {
      const content = fs.readFileSync(path.join(ICONS_DIR, svgFile), 'utf8');
      if (!content.includes('<svg') || !content.includes('</svg>')) {
        logFail(`Corrupted SVG file: ${svgFile}`);
        invalidSvgs++;
      }
    }

    if (invalidSvgs === 0) {
      logPass(`All ${diskSvgs.length} SVG files on disk are well-formed XML vector graphics.`);
    }
  } catch (err) {
    logFail(`Icon manifest parse error: ${err.message}`);
  }
}

// 3. Final Summary
console.log('\n----------------------------------------');
if (errorCount === 0) {
  console.log('✨ All integrity checks passed! 0 errors detected.\n');
  process.exit(0);
} else {
  console.error(`💥 Linting failed with ${errorCount} error(s).\n`);
  process.exit(1);
}
