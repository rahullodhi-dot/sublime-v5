import React from 'react';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema } from '../utils/schemas';

const About: React.FC = () => {
  const structuredData = [organizationSchema, localBusinessSchema];

  return (
    <>
      <SEO
        title="About Us - Our Tea Story & Mission"
        description="Learn about Sublime House Tea - our mission, values, and commitment to providing premium teas with exceptional quality and authentic tea experiences."
        keywords="about sublime house tea, tea company story, tea mission, tea values, tea expertise, sustainable tea sourcing"
        url="https://sublimehousetea.com/about"
        structuredData={structuredData}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Sublime House Tea
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the finest teas from around the world, 
            creating memorable tea experiences that celebrate the art and culture of tea.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Tea Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded with a deep love for tea culture, Sublime House Tea began as a small family business 
                with a vision to share the world's finest teas. Our journey started in the misty mountains 
                of Darjeeling, where we first discovered the magic of hand-picked tea leaves.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we're proud to serve tea enthusiasts worldwide, offering carefully curated selections 
                from renowned tea gardens across Asia, Africa, and beyond. Our commitment to quality, 
                authenticity, and sustainable sourcing remains unwavering.
              </p>
              <p className="text-gray-600">
                We believe that every cup of tea tells a story - from the skilled hands that pluck the leaves 
                to the traditional methods that preserve their natural flavors. That's why we've built our 
                platform to share these stories and help you discover your perfect cup.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-green-200">
              <div className="space-y-6">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">🍃</div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Handpicked Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every tea leaf is carefully selected from the finest gardens around the world
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tea Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our tea journey and craft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🍃</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We meticulously select every tea leaf from the finest gardens, ensuring 
                exceptional quality, authentic flavors, and traditional craftsmanship.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🫖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Tea Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our tea masters bring decades of experience, helping you discover 
                the perfect blend and brewing techniques for your taste.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Sustainable Sourcing</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with ethical tea gardens committed to sustainable practices, 
                fair trade, and environmental responsibility.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tea Sourcing & Team */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tea Sourcing */}
            <div className="group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-amber-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">🏔️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Our Tea Gardens</h3>
              </div>
              <div className="space-y-4">
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">🍃</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-amber-600 transition-colors">Darjeeling, India</h4>
                    <p className="text-sm text-gray-600">High-altitude black teas</p>
                  </div>
                </div>
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">🌿</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-amber-600 transition-colors">Fujian, China</h4>
                    <p className="text-sm text-gray-600">Premium white and oolong teas</p>
                  </div>
                </div>
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">🌸</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-amber-600 transition-colors">Kyoto, Japan</h4>
                    <p className="text-sm text-gray-600">Ceremonial matcha and green teas</p>
                  </div>
                </div>
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">🌾</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-amber-600 transition-colors">Ceylon, Sri Lanka</h4>
                    <p className="text-sm text-gray-600">Classic black tea blends</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-green-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">👥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Our Tea Masters</h3>
              </div>
              <div className="space-y-4">
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">👨‍🍳</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-green-600 transition-colors">Master Tea Blender</h4>
                    <p className="text-sm text-gray-600">20+ years creating perfect blends</p>
                  </div>
                </div>
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">🌍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-green-600 transition-colors">Sourcing Specialist</h4>
                    <p className="text-sm text-gray-600">Direct relationships with tea gardens</p>
                  </div>
                </div>
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">📚</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-green-600 transition-colors">Tea Educator</h4>
                    <p className="text-sm text-gray-600">Sharing tea knowledge and culture</p>
                  </div>
                </div>
                <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">💚</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover/item:text-green-600 transition-colors">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Ensuring every cup meets our standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-green-600 text-white py-16 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tea Impact</h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to tea excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-green-200">Tea Enthusiasts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-green-200">Tea Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-200">Tea Gardens</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

