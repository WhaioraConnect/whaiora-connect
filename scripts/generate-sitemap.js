import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://whaioraconnect.nz';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_FILE = path.join(__dirname, '../dist/sitemap.xml');

// Routes that should be excluded from sitemap
const EXCLUDED_ROUTES = [
  '404',
  '_app',
  '_document',
  'test',
  'admin', // Add any admin pages
];

// Dynamic routes configuration (if you have any)
const DYNAMIC_ROUTES = [
  // Example: { path: '/blog/post-slug', lastmod: '2026-01-10' }
];

/**
 * Get all page files from src/pages directory
 */
function getPageFiles(dir, baseDir = dir) {
  let files = [];
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files = files.concat(getPageFiles(fullPath, baseDir));
    } else if (item.isFile() && /\.(tsx|jsx)$/.test(item.name)) {
      const relativePath = path.relative(baseDir, fullPath);
      files.push(relativePath);
    }
  }
  
  return files;
}

/**
 * Convert file path to URL path
 */
function filePathToUrl(filePath) {
  let url = filePath
    .replace(/\.(tsx|jsx)$/, '') // Remove extension
    .replace(/\\/g, '/') // Windows path fix
    .replace(/index$/, ''); // Remove 'index' from end
  
  // Handle root index
  if (url === '' || url === '/') {
    return '/';
  }
  
  // Ensure leading slash
  if (!url.startsWith('/')) {
    url = '/' + url;
  }
  
  // Remove trailing slash (except for root)
  if (url !== '/' && url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  
  return url;
}

/**
 * Check if route should be excluded
 */
function shouldExclude(url) {
  return EXCLUDED_ROUTES.some(excluded => 
    url.includes(excluded) || url.includes(`/${excluded}`)
  );
}

/**
 * Get last modified date for a file
 */
function getLastModified(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Determine change frequency based on path
 */
function getChangeFrequency(url) {
  if (url === '/') return 'daily';
  if (url.includes('/blog') || url.includes('/news')) return 'weekly';
  if (url.includes('/about') || url.includes('/contact')) return 'monthly';
  return 'weekly';
}

/**
 * Determine priority based on path
 */
function getPriority(url) {
  if (url === '/') return '1.0';
  if (url.includes('/about') || url.includes('/services')) return '0.8';
  if (url.includes('/blog') || url.includes('/resources')) return '0.6';
  return '0.5';
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  console.log('🗺️  Generating sitemap...');
  
  // Get all page files
  const pageFiles = getPageFiles(PAGES_DIR);
  
  // Convert to URLs
  const urls = pageFiles
    .map(file => ({
      url: filePathToUrl(file),
      fullPath: path.join(PAGES_DIR, file),
    }))
    .filter(({ url }) => !shouldExclude(url))
    .map(({ url, fullPath }) => ({
      loc: `${SITE_URL}${url}`,
      lastmod: getLastModified(fullPath),
      changefreq: getChangeFrequency(url),
      priority: getPriority(url),
    }));
  
  // Add dynamic routes if any
  DYNAMIC_ROUTES.forEach(route => {
    urls.push({
      loc: `${SITE_URL}${route.path}`,
      lastmod: route.lastmod || new Date().toISOString().split('T')[0],
      changefreq: route.changefreq || 'weekly',
      priority: route.priority || '0.5',
    });
  });
  
  // Sort by priority (highest first)
  urls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
  
  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  // Ensure dist directory exists
  const distDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Write sitemap
  fs.writeFileSync(OUTPUT_FILE, xml, 'utf-8');
  
  console.log(`✅ Sitemap generated with ${urls.length} URLs`);
  console.log(`📍 Location: ${OUTPUT_FILE}`);
  console.log('\n📄 URLs included:');
  urls.forEach(url => console.log(`   - ${url.loc} (priority: ${url.priority})`));
}

// Run the generator
try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}