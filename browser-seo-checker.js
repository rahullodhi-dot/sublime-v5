// Browser SEO Checker for Sublime House Tea
// Copy and paste this code into your browser console (F12) while on your website

function checkSEO() {
  console.log('🔍 SEO Check for Sublime House Tea');
  console.log('='.repeat(50));
  
  const results = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || 'Not found',
    keywords: document.querySelector('meta[name="keywords"]')?.content || 'Not found',
    ogTitle: document.querySelector('meta[property="og:title"]')?.content || 'Not found',
    ogDescription: document.querySelector('meta[property="og:description"]')?.content || 'Not found',
    ogImage: document.querySelector('meta[property="og:image"]')?.content || 'Not found',
    ogUrl: document.querySelector('meta[property="og:url"]')?.content || 'Not found',
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || 'Not found',
    twitterTitle: document.querySelector('meta[name="twitter:title"]')?.content || 'Not found',
    twitterDescription: document.querySelector('meta[name="twitter:description"]')?.content || 'Not found',
    twitterImage: document.querySelector('meta[name="twitter:image"]')?.content || 'Not found',
    canonical: document.querySelector('link[rel="canonical"]')?.href || 'Not found',
    viewport: document.querySelector('meta[name="viewport"]')?.content || 'Not found',
    themeColor: document.querySelector('meta[name="theme-color"]')?.content || 'Not found'
  };
  
  // Display results
  console.log('📄 Page Information:');
  console.log(`Title: ${results.title}`);
  console.log(`Description: ${results.description}`);
  console.log(`Keywords: ${results.keywords}`);
  console.log(`Canonical URL: ${results.canonical}`);
  console.log(`Viewport: ${results.viewport}`);
  console.log(`Theme Color: ${results.themeColor}`);
  
  console.log('\n📱 OpenGraph Tags:');
  console.log(`og:title: ${results.ogTitle}`);
  console.log(`og:description: ${results.ogDescription}`);
  console.log(`og:image: ${results.ogImage}`);
  console.log(`og:url: ${results.ogUrl}`);
  
  console.log('\n🐦 Twitter Card Tags:');
  console.log(`twitter:card: ${results.twitterCard}`);
  console.log(`twitter:title: ${results.twitterTitle}`);
  console.log(`twitter:description: ${results.twitterDescription}`);
  console.log(`twitter:image: ${results.twitterImage}`);
  
  // Check structured data
  const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
  console.log(`\n📊 Structured Data: Found ${structuredDataScripts.length} schema(s)`);
  
  structuredDataScripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent);
      console.log(`${index + 1}. Type: ${data['@type'] || 'Unknown'}`);
      if (data.name) console.log(`   Name: ${data.name}`);
      if (data.description) console.log(`   Description: ${data.description}`);
    } catch (e) {
      console.log(`${index + 1}. Invalid JSON-LD`);
    }
  });
  
  // Validation checks
  console.log('\n✅ Validation Checks:');
  
  // Title length check
  if (results.title.length >= 30 && results.title.length <= 60) {
    console.log('✅ Title length is optimal (30-60 characters)');
  } else {
    console.log(`⚠️ Title length: ${results.title.length} characters (recommended: 30-60)`);
  }
  
  // Description length check
  if (results.description.length >= 120 && results.description.length <= 160) {
    console.log('✅ Description length is optimal (120-160 characters)');
  } else {
    console.log(`⚠️ Description length: ${results.description.length} characters (recommended: 120-160)`);
  }
  
  // Check for required meta tags
  const requiredTags = [
    { name: 'Title', value: results.title, required: true },
    { name: 'Description', value: results.description, required: true },
    { name: 'og:title', value: results.ogTitle, required: true },
    { name: 'og:description', value: results.ogDescription, required: true },
    { name: 'og:image', value: results.ogImage, required: true },
    { name: 'twitter:card', value: results.twitterCard, required: true },
    { name: 'Canonical URL', value: results.canonical, required: true }
  ];
  
  requiredTags.forEach(tag => {
    if (tag.value === 'Not found') {
      console.log(`❌ Missing: ${tag.name}`);
    } else {
      console.log(`✅ Present: ${tag.name}`);
    }
  });
  
  // Check headings
  const headings = {
    h1: document.querySelectorAll('h1').length,
    h2: document.querySelectorAll('h2').length,
    h3: document.querySelectorAll('h3').length,
    h4: document.querySelectorAll('h4').length,
    h5: document.querySelectorAll('h5').length,
    h6: document.querySelectorAll('h6').length
  };
  
  console.log('\n📋 Heading Structure:');
  Object.entries(headings).forEach(([tag, count]) => {
    console.log(`${tag.toUpperCase()}: ${count} heading(s)`);
  });
  
  if (headings.h1 === 0) {
    console.log('❌ No H1 heading found');
  } else if (headings.h1 > 1) {
    console.log('⚠️ Multiple H1 headings found (recommended: 1)');
  } else {
    console.log('✅ Single H1 heading found');
  }
  
  // Check images
  const images = document.querySelectorAll('img');
  const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
  
  console.log(`\n🖼️ Images: ${images.length} total, ${imagesWithoutAlt.length} without alt text`);
  if (imagesWithoutAlt.length > 0) {
    console.log('⚠️ Some images are missing alt text');
  } else {
    console.log('✅ All images have alt text');
  }
  
  // Check links
  const links = document.querySelectorAll('a');
  const internalLinks = Array.from(links).filter(link => 
    link.href.includes(window.location.hostname) || link.href.startsWith('/')
  );
  const externalLinks = Array.from(links).filter(link => 
    !link.href.includes(window.location.hostname) && !link.href.startsWith('/')
  );
  
  console.log(`\n🔗 Links: ${links.length} total (${internalLinks.length} internal, ${externalLinks.length} external)`);
  
  // Performance check
  console.log('\n⚡ Performance Check:');
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      console.log(`Page Load Time: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
      console.log(`DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
    }
  }
  
  console.log('\n🎯 SEO Score Summary:');
  let score = 0;
  let totalChecks = 0;
  
  // Basic checks
  if (results.title !== 'Not found') { score++; }
  totalChecks++;
  
  if (results.description !== 'Not found') { score++; }
  totalChecks++;
  
  if (results.ogTitle !== 'Not found') { score++; }
  totalChecks++;
  
  if (results.twitterCard !== 'Not found') { score++; }
  totalChecks++;
  
  if (results.canonical !== 'Not found') { score++; }
  totalChecks++;
  
  if (structuredDataScripts.length > 0) { score++; }
  totalChecks++;
  
  if (headings.h1 === 1) { score++; }
  totalChecks++;
  
  if (imagesWithoutAlt.length === 0) { score++; }
  totalChecks++;
  
  const percentage = Math.round((score / totalChecks) * 100);
  console.log(`Overall SEO Score: ${score}/${totalChecks} (${percentage}%)`);
  
  if (percentage >= 90) {
    console.log('🎉 Excellent SEO implementation!');
  } else if (percentage >= 70) {
    console.log('👍 Good SEO implementation, some improvements needed');
  } else {
    console.log('⚠️ SEO needs improvement');
  }
  
  console.log('\n📚 Next Steps:');
  console.log('1. Test with online tools:');
  console.log('   - Google Rich Results Test: https://search.google.com/test/rich-results');
  console.log('   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
  console.log('   - Twitter Card Validator: https://cards-dev.twitter.com/validator');
  console.log('2. Run Lighthouse audit in Chrome DevTools');
  console.log('3. Check mobile responsiveness');
  
  return results;
}

// Run the SEO check
checkSEO();
