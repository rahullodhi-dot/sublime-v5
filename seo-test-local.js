#!/usr/bin/env node

// Local SEO Testing Script for Sublime House Tea
// Run with: node seo-test-local.js

import http from 'http';

const BASE_URL = 'http://localhost:5173';
const PAGES = [
  { path: '/', name: 'Home Page' },
  { path: '/products', name: 'Products Page' },
  { path: '/categories', name: 'Categories Page' },
  { path: '/about', name: 'About Page' },
  { path: '/contact', name: 'Contact Page' }
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractMetaTags(html) {
  const metaTags = {
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: '',
    twitterCard: '',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    canonical: '',
    structuredData: []
  };

  // Extract title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) metaTags.title = titleMatch[1];

  // Extract meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i);
  if (descMatch) metaTags.description = descMatch[1];

  // Extract keywords
  const keywordsMatch = html.match(/<meta\s+name="keywords"\s+content="([^"]*)"[^>]*>/i);
  if (keywordsMatch) metaTags.keywords = keywordsMatch[1];

  // Extract OpenGraph tags
  const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"[^>]*>/i);
  if (ogTitleMatch) metaTags.ogTitle = ogTitleMatch[1];

  const ogDescMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"[^>]*>/i);
  if (ogDescMatch) metaTags.ogDescription = ogDescMatch[1];

  const ogImageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"[^>]*>/i);
  if (ogImageMatch) metaTags.ogImage = ogImageMatch[1];

  const ogUrlMatch = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"[^>]*>/i);
  if (ogUrlMatch) metaTags.ogUrl = ogUrlMatch[1];

  // Extract Twitter Card tags
  const twitterCardMatch = html.match(/<meta\s+name="twitter:card"\s+content="([^"]*)"[^>]*>/i);
  if (twitterCardMatch) metaTags.twitterCard = twitterCardMatch[1];

  const twitterTitleMatch = html.match(/<meta\s+name="twitter:title"\s+content="([^"]*)"[^>]*>/i);
  if (twitterTitleMatch) metaTags.twitterTitle = twitterTitleMatch[1];

  const twitterDescMatch = html.match(/<meta\s+name="twitter:description"\s+content="([^"]*)"[^>]*>/i);
  if (twitterDescMatch) metaTags.twitterDescription = twitterDescMatch[1];

  const twitterImageMatch = html.match(/<meta\s+name="twitter:image"\s+content="([^"]*)"[^>]*>/i);
  if (twitterImageMatch) metaTags.twitterImage = twitterImageMatch[1];

  // Extract canonical URL
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"[^>]*>/i);
  if (canonicalMatch) metaTags.canonical = canonicalMatch[1];

  // Extract structured data
  const scriptMatches = html.match(/<script\s+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis);
  if (scriptMatches) {
    scriptMatches.forEach(script => {
      try {
        const jsonMatch = script.match(/<script[^>]*>(.*?)<\/script>/is);
        if (jsonMatch) {
          const jsonData = JSON.parse(jsonMatch[1]);
          metaTags.structuredData.push(jsonData);
        }
      } catch (e) {
        console.warn('Invalid JSON-LD found');
      }
    });
  }

  return metaTags;
}

function validateSEO(metaTags, pageName) {
  const issues = [];
  
  // Check title
  if (!metaTags.title) {
    issues.push('❌ Missing title tag');
  } else if (metaTags.title.length < 30 || metaTags.title.length > 60) {
    issues.push(`⚠️ Title length: ${metaTags.title.length} characters (recommended: 30-60)`);
  } else {
    console.log(`✅ Title: ${metaTags.title}`);
  }

  // Check description
  if (!metaTags.description) {
    issues.push('❌ Missing meta description');
  } else if (metaTags.description.length < 120 || metaTags.description.length > 160) {
    issues.push(`⚠️ Description length: ${metaTags.description.length} characters (recommended: 120-160)`);
  } else {
    console.log(`✅ Description: ${metaTags.description}`);
  }

  // Check OpenGraph
  if (!metaTags.ogTitle) issues.push('❌ Missing og:title');
  if (!metaTags.ogDescription) issues.push('❌ Missing og:description');
  if (!metaTags.ogImage) issues.push('❌ Missing og:image');
  if (!metaTags.ogUrl) issues.push('❌ Missing og:url');

  // Check Twitter Cards
  if (!metaTags.twitterCard) issues.push('❌ Missing twitter:card');
  if (!metaTags.twitterTitle) issues.push('❌ Missing twitter:title');
  if (!metaTags.twitterDescription) issues.push('❌ Missing twitter:description');
  if (!metaTags.twitterImage) issues.push('❌ Missing twitter:image');

  // Check canonical
  if (!metaTags.canonical) issues.push('❌ Missing canonical URL');

  // Check structured data
  if (metaTags.structuredData.length === 0) {
    issues.push('❌ No structured data found');
  } else {
    console.log(`✅ Found ${metaTags.structuredData.length} structured data schemas`);
  }

  return issues;
}

async function testPage(page) {
  console.log(`\n🔍 Testing ${page.name} (${BASE_URL}${page.path})`);
  console.log('='.repeat(60));
  
  try {
    const html = await fetchPage(`${BASE_URL}${page.path}`);
    const metaTags = extractMetaTags(html);
    const issues = validateSEO(metaTags, page.name);
    
    if (issues.length === 0) {
      console.log('🎉 All SEO checks passed!');
    } else {
      console.log('\n📋 Issues found:');
      issues.forEach(issue => console.log(`  ${issue}`));
    }
    
    // Show structured data types
    if (metaTags.structuredData.length > 0) {
      console.log('\n📊 Structured Data Types:');
      metaTags.structuredData.forEach((data, index) => {
        console.log(`  ${index + 1}. ${data['@type'] || 'Unknown'}`);
      });
    }
    
  } catch (error) {
    console.log(`❌ Error testing ${page.name}: ${error.message}`);
    console.log('💡 Make sure the dev server is running: npm run dev');
  }
}

async function testSitemapAndRobots() {
  console.log('\n🗺️ Testing Sitemap and Robots.txt');
  console.log('='.repeat(60));
  
  try {
    // Test sitemap
    const sitemap = await fetchPage(`${BASE_URL}/sitemap.xml`);
    if (sitemap.includes('<?xml') && sitemap.includes('<urlset')) {
      console.log('✅ Sitemap.xml is accessible and valid');
    } else {
      console.log('❌ Sitemap.xml is not valid');
    }
  } catch (error) {
    console.log('❌ Sitemap.xml not accessible');
  }
  
  try {
    // Test robots.txt
    const robots = await fetchPage(`${BASE_URL}/robots.txt`);
    if (robots.includes('User-agent:') && robots.includes('Sitemap:')) {
      console.log('✅ Robots.txt is accessible and valid');
    } else {
      console.log('❌ Robots.txt is not valid');
    }
  } catch (error) {
    console.log('❌ Robots.txt not accessible');
  }
}

async function runSEOTests() {
  console.log('🚀 Starting Local SEO Tests for Sublime House Tea');
  console.log('='.repeat(60));
  console.log(`📍 Testing URL: ${BASE_URL}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
  
  // Test all pages
  for (const page of PAGES) {
    await testPage(page);
  }
  
  // Test sitemap and robots
  await testSitemapAndRobots();
  
  console.log('\n🎯 SEO Testing Complete!');
  console.log('='.repeat(60));
  console.log('\n📚 Next Steps:');
  console.log('1. Fix any issues found above');
  console.log('2. Test with online tools:');
  console.log('   - Google Rich Results Test: https://search.google.com/test/rich-results');
  console.log('   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
  console.log('   - Twitter Card Validator: https://cards-dev.twitter.com/validator');
  console.log('3. Run Lighthouse audit in Chrome DevTools');
  console.log('4. Check mobile responsiveness');
}

// Run the tests
runSEOTests().catch(console.error);
