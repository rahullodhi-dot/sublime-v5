/**
 * Quick Test Script for Strapi Tea Types Section API
 * Run: node test-strapi-api.js
 */

const STRAPI_URL = 'http://localhost:1337';
const ENDPOINT = '/api/tea-types-section?populate=*';

async function testStrapiAPI() {
  console.log('🧪 Testing Strapi API...\n');
  console.log(`📍 URL: ${STRAPI_URL}${ENDPOINT}\n`);

  try {
    const response = await fetch(`${STRAPI_URL}${ENDPOINT}`);
    
    console.log(`📊 Status: ${response.status} ${response.statusText}\n`);

    if (response.status === 401) {
      console.log('❌ ERROR: 401 Unauthorized\n');
      console.log('🔧 FIX NEEDED:');
      console.log('1. Open Strapi Admin: http://localhost:1337/admin');
      console.log('2. Go to Settings → Roles → Public');
      console.log('3. Find "Tea-types-section"');
      console.log('4. Check ✅ find and ✅ findOne');
      console.log('5. Click Save\n');
      console.log('📖 See: STRAPI_401_FIX.md for detailed steps\n');
      return;
    }

    if (response.status === 404) {
      console.log('❌ ERROR: 404 Not Found\n');
      console.log('🔧 FIX NEEDED:');
      console.log('1. Content type "Tea Types Section" does not exist');
      console.log('2. Create it in Content-Type Builder');
      console.log('3. Add all required fields');
      console.log('4. Set permissions\n');
      console.log('📖 See: STRAPI_TEA_TYPES_SECTION_SETUP.md for detailed steps\n');
      return;
    }

    if (!response.ok) {
      console.log(`❌ ERROR: ${response.status}\n`);
      const errorText = await response.text();
      console.log('Response:', errorText, '\n');
      return;
    }

    const data = await response.json();
    
    console.log('✅ SUCCESS! API is working\n');
    console.log('📦 Response Data:');
    console.log(JSON.stringify(data, null, 2));
    console.log('\n');

    if (data.data) {
      const attrs = data.data.attributes;
      console.log('📋 Content Summary:');
      console.log(`   Heading: ${attrs?.heading || 'Not set'}`);
      console.log(`   Subtext: ${attrs?.subtext || 'Not set'}`);
      console.log(`   Description: ${attrs?.description?.substring(0, 50) || 'Not set'}...`);
      console.log(`   Button Text: ${attrs?.buttonText || 'Not set'}`);
      console.log(`   Button Link: ${attrs?.buttonLink || 'Not set'}`);
      console.log(`   Green Tea Label: ${attrs?.greenTeaLabel || 'Not set'}`);
      console.log(`   Background Color: ${attrs?.backgroundColor || 'Not set'}`);
      console.log(`   Main Image: ${attrs?.mainImage?.data ? '✅ Uploaded' : '❌ Not uploaded'}`);
      console.log('\n');
    }

    console.log('🎉 Your frontend will now load data from Strapi!\n');

  } catch (error) {
    console.log('❌ ERROR: Cannot connect to Strapi\n');
    console.log('🔧 FIX NEEDED:');
    console.log('1. Make sure Strapi is running');
    console.log('2. Start it with: npm run develop');
    console.log('3. Check it\'s running on: http://localhost:1337\n');
    console.log('Error details:', error.message, '\n');
  }
}

// Run the test
testStrapiAPI();
