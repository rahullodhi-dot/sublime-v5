import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Sublime House Tea - Premium Teas & Exceptional Tea Experiences",
  description = "Discover premium teas at Sublime House Tea. Quality tea blends, exceptional service, and authentic tea experiences. Shop now for the finest teas!",
  keywords = "premium teas, tea blends, green tea, black tea, oolong tea, herbal tea, sublime house tea, tea shop, online tea store",
  image = "/og-image.jpg",
  url = "https://sublimehousetea.com",
  type = "website",
  structuredData,
  canonical
}) => {
  const fullTitle = title.includes("Sublime House Tea") ? title : `${title} | Sublime House Tea`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sublime House Tea" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Sublime House Tea" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SublimeHouseTea" />
      <meta name="twitter:creator" content="@SublimeHouseTea" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Sublime House Tea" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
