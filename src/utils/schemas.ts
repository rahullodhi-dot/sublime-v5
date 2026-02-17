// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sublime House Tea",
  "description": "Premium tea retailer offering exceptional tea blends from around the world",
  "url": "https://sublimehousetea.com",
  "logo": "https://sublimehousetea.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/sublimehousetea",
    "https://www.twitter.com/sublimehousetea",
    "https://www.instagram.com/sublimehousetea",
    "https://www.linkedin.com/company/sublimehousetea"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Commerce Street",
    "addressLocality": "Business District",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sublime House Tea",
  "url": "https://sublimehousetea.com",
  "description": "Premium tea retailer offering exceptional tea blends from around the world",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sublimehousetea.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const productSchema = (product: {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  availability: string;
  brand: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": product.brand
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "USD",
    "availability": `https://schema.org/${product.availability}`,
    "seller": {
      "@type": "Organization",
      "name": "Sublime House Tea"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount
  }
});

export const collectionPageSchema = (category: {
  name: string;
  description: string;
  url: string;
  productCount: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": category.name,
  "description": category.description,
  "url": category.url,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": category.productCount
  }
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sublimehousetea.com/#business",
  "name": "Sublime House Tea",
  "description": "Premium tea retailer offering exceptional tea blends from around the world",
  "url": "https://sublimehousetea.com",
  "telephone": "+1-555-123-4567",
  "email": "info@sublimehousetea.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Commerce Street",
    "addressLocality": "Business District",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "servedCuisine": "Tea",
  "paymentAccepted": "Cash, Credit Card, PayPal",
  "currenciesAccepted": "USD"
};
