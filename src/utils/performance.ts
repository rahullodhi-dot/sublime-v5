import { useEffect } from 'react';

// Performance monitoring and optimization utilities
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would typically use web-vitals library
      console.log('Performance monitoring enabled');
    }

    // Monitor LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    return () => {
      observer.disconnect();
    };
  }, []);
};

// Image lazy loading utility
export const useLazyLoading = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    return () => {
      imageObserver.disconnect();
    };
  }, []);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/src/main.tsx',
    '/src/index.css'
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};

// Optimize images for different screen sizes
export const getOptimizedImageSrc = (baseSrc: string, width?: number) => {
  if (!width) return baseSrc;
  
  // This would typically integrate with an image optimization service
  // For now, we'll return the base source
  return baseSrc;
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Resource hints for better performance
export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' }
  ];

  hints.forEach((hint) => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};
