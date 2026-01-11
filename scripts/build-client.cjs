#!/usr/bin/env node

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const entry = path.join(projectRoot, 'src', 'index.tsx');
const outDir = path.join(projectRoot, 'dist');

/* -------------------------------------------------- */
/* Utils                                              */
/* -------------------------------------------------- */

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied: ${path.relative(projectRoot, src)}`);
  }
}

/* -------------------------------------------------- */
/* Pre-flight checks                                  */
/* -------------------------------------------------- */

if (!fs.existsSync(entry)) {
  console.error('❌ ERROR: src/index.tsx not found');
  process.exit(1);
}

ensureDir(outDir);

/* -------------------------------------------------- */
/* Tailwind CSS                                       */
/* -------------------------------------------------- */

console.log('🎨 Compiling Tailwind CSS...');
try {
  execSync(
  'node ./node_modules/tailwindcss/lib/cli.js -i ./src/index.css -o ./dist/main.css --minify',
  { stdio: 'inherit', cwd: projectRoot }
);

  console.log('✓ CSS compiled');
} catch (err) {
  console.error('❌ Tailwind build failed');
  process.exit(1);
}

/* -------------------------------------------------- */
/* Client bundle                                      */
/* -------------------------------------------------- */

console.log('📦 Bundling React client...');
try {
  esbuild.buildSync({
    entryPoints: [entry],
    bundle: true,
    platform: 'browser',
    format: 'esm',
    outfile: path.join(outDir, 'main.js'),
    minify: true,
    sourcemap: false,
    jsx: 'automatic',
    loader: {
      '.png': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.svg': 'file',
      '.css': 'css'
    }
  });
  console.log('✓ main.js built');
} catch (err) {
  console.error('❌ esbuild error:', err.message || err);
  process.exit(1);
}

/* -------------------------------------------------- */
/* Static assets                                      */
/* -------------------------------------------------- */

console.log('📁 Copying static assets...');

/**
 * IMPORTANT:
 * public/* must land directly in dist/*
 * NOT dist/public/*
 */
const publicDir = path.join(projectRoot, 'public');
if (fs.existsSync(publicDir)) {
  copyRecursive(publicDir, outDir);
}

/**
 * Optional images folder (if you still use src/img)
 */
const imgSource = path.join(projectRoot, 'src', 'img');
if (fs.existsSync(imgSource)) {
  copyRecursive(imgSource, path.join(outDir, 'img'));
}

console.log('\n✅ Build complete → dist/');
