// Strapi Response Types

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
      width: number;
      height: number;
      alternativeText?: string;
    };
  } | null;
}

export interface StrapiMultipleImages {
  data: Array<{
    id: number;
    attributes: {
      name: string;
      url: string;
      width: number;
      height: number;
      alternativeText?: string;
    };
  }>;
}

// Hero Slider Types
export interface HeroSlideAttributes {
  order: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  slideType: 'video' | 'image';
  backgroundVideo?: StrapiImage;
  backgroundImage?: StrapiImage;
  productImage?: StrapiImage;
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HeroSlide {
  id: number;
  attributes: HeroSlideAttributes;
}

// Category Types
export interface CategoryAttributes {
  name: string;
  slug: string;
  description?: string;
  image: StrapiImage;
  icon?: StrapiImage;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  attributes: CategoryAttributes;
}

// Why Choose Us Types
export interface WhyChooseUsFeatureAttributes {
  title: string;
  description: string;
  image: StrapiImage;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WhyChooseUsFeature {
  id: number;
  attributes: WhyChooseUsFeatureAttributes;
}

// Tea Types Section Types
export interface TeaTypesSectionAttributes {
  heading: string;
  subtext: string;
  description: string;
  mainImage: StrapiImage;
  buttonText: string;
  buttonLink: string;
  greenTeaLabel: string;
  backgroundColor: string;
  createdAt: string;
  updatedAt: string;
}

// Product Types
export interface ProductAttributes {
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  images: StrapiMultipleImages;
  hoverImage?: StrapiImage;
  badge?: string;
  quantity?: string;
  category?: {
    data: Category | null;
  };
  isFeatured: boolean;
  isBestseller: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

// Gift Box Types
export interface GiftBoxAttributes {
  name: string;
  slug: string;
  title: string;
  price: number;
  description: string;
  mainImage: StrapiImage;
  thumbnails: StrapiMultipleImages;
  contains: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GiftBox {
  id: number;
  attributes: GiftBoxAttributes;
}

// Partner Types
export interface PartnerAttributes {
  name: string;
  logo: StrapiImage;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Partner {
  id: number;
  attributes: PartnerAttributes;
}

// Testimonial Types
export interface TestimonialAttributes {
  customerName: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  customerImage?: StrapiImage;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: number;
  attributes: TestimonialAttributes;
}

// About Section Types
export interface AboutSectionAttributes {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: StrapiImage;
  backgroundColor?: string;
  createdAt: string;
  updatedAt: string;
}

// Blog Post Types
export interface BlogPostAttributes {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: StrapiImage;
  author: string;
  publishedDate: string;
  category?: string;
  tags?: string[];
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  attributes: BlogPostAttributes;
}

// Home Page SEO Types
export interface HomePageSEOAttributes {
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: StrapiImage;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: any;
  createdAt: string;
  updatedAt: string;
}

// Strapi API Response Types
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  } | null;
}

// Generic Strapi Entity and Media Types
export interface StrapiEntity<T = any> {
  id: number;
  attributes: T;
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    url: string;
    width: number;
    height: number;
    alternativeText?: string;
    formats?: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
      small?: {
        url: string;
        width: number;
        height: number;
      };
      medium?: {
        url: string;
        width: number;
        height: number;
      };
      large?: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

// Authentication Types
export interface StrapiUser {
  id: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
  user: StrapiUser;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

export interface RegisterResponse {
  jwt: string;
  user: StrapiUser;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  code: string;
  password: string;
  passwordConfirmation: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

// OTP Types
export interface SendOTPRequest {
  phone: string;
}

export interface SendOTPResponse {
  success: boolean;
  message: string;
}

export interface LoginWithOTPRequest {
  phone: string;
  otp: string;
}

export interface LoginWithOTPResponse {
  jwt: string;
  user: StrapiUser;
}

export interface RegisterWithOTPRequest {
  phone: string;
  otp: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

export interface RegisterWithOTPResponse {
  jwt: string;
  data: StrapiUser;
}

// Contact Form Types
export interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: any;
}
