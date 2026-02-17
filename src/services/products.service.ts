/**
 * Products Service
 * Handles all product-related API calls to Strapi
 */

import { apiGet, apiPost, apiPut, apiDelete } from '../utils/api';
import { STRAPI_CONFIG } from '../config/strapi.config';
import type {
  StrapiEntity,
  StrapiResponse,
  ProductAttributes,
} from '../types/strapi.types';
import type { ApiResponse } from '../utils/api';

export interface ProductFilters {
  category?: number | string;
  categories?: number[];
  featured?: boolean;
  inStock?: boolean;
  search?: string;
  price_min?: number;
  price_max?: number;
  tags?: string[];
  [key: string]: any;
}

export interface ProductQueryParams extends ProductFilters {
  populate?: string | string[];
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  fields?: string[];
  locale?: string;
}

/**
 * Get all products
 */
export const getProducts = async (
  params?: ProductQueryParams
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>[]>> => {
  const queryParams: Record<string, any> = {};
  
  if (params) {
    // Handle populate
    if (params.populate) {
      if (Array.isArray(params.populate)) {
        params.populate.forEach((field, index) => {
          queryParams[`populate[${index}]`] = field;
        });
      } else {
        queryParams.populate = params.populate;
      }
    } else {
      // Default populate
      queryParams.populate = '*';
    }
    
    // Handle sort
    if (params.sort) {
      if (Array.isArray(params.sort)) {
        params.sort.forEach((sort, index) => {
          queryParams[`sort[${index}]`] = sort;
        });
      } else {
        queryParams.sort = params.sort;
      }
    }
    
    // Handle pagination
    if (params.pagination) {
      if (params.pagination.page !== undefined) {
        queryParams['pagination[page]'] = params.pagination.page;
      }
      if (params.pagination.pageSize !== undefined) {
        queryParams['pagination[pageSize]'] = params.pagination.pageSize;
      }
    }
    
    // Handle filters
    if (params.category) {
      queryParams['filters[category][id][$eq]'] = params.category;
    }
    
    if (params.categories && params.categories.length > 0) {
      params.categories.forEach((catId, index) => {
        queryParams[`filters[categories][id][$in][${index}]`] = catId;
      });
    }
    
    if (params.featured !== undefined) {
      queryParams['filters[featured][$eq]'] = params.featured;
    }
    
    if (params.inStock !== undefined) {
      queryParams['filters[inStock][$eq]'] = params.inStock;
    }
    
    if (params.search) {
      queryParams['filters[$or][0][name][$containsi]'] = params.search;
      queryParams['filters[$or][1][description][$containsi]'] = params.search;
    }
    
    if (params.price_min !== undefined) {
      queryParams['filters[price][$gte]'] = params.price_min;
    }
    
    if (params.price_max !== undefined) {
      queryParams['filters[price][$lte]'] = params.price_max;
    }
    
    if (params.tags && params.tags.length > 0) {
      params.tags.forEach((tag, index) => {
        queryParams[`filters[tags][$contains][${index}]`] = tag;
      });
    }
    
    // Handle fields
    if (params.fields) {
      params.fields.forEach((field, index) => {
        queryParams[`fields[${index}]`] = field;
      });
    }
    
    // Handle locale
    if (params.locale) {
      queryParams.locale = params.locale;
    }
  } else {
    // Default populate
    queryParams.populate = '*';
  }
  
  return apiGet<StrapiResponse<StrapiEntity<ProductAttributes>[]>>(
    STRAPI_CONFIG.ENDPOINTS.PRODUCTS,
    queryParams
  );
};

/**
 * Get product by ID
 */
export const getProduct = async (
  id: number | string,
  populate: string | string[] = '*'
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>>> => {
  const params: Record<string, any> = {};
  
  if (Array.isArray(populate)) {
    populate.forEach((field, index) => {
      params[`populate[${index}]`] = field;
    });
  } else {
    params.populate = populate;
  }
  
  return apiGet<StrapiResponse<StrapiEntity<ProductAttributes>>>(
    `${STRAPI_CONFIG.ENDPOINTS.PRODUCTS}/${id}`,
    params
  );
};

/**
 * Get product by slug
 */
export const getProductBySlug = async (
  slug: string,
  populate: string | string[] = '*'
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>[]>> => {
  const params: Record<string, any> = {
    'filters[slug][$eq]': slug,
  };
  
  if (Array.isArray(populate)) {
    populate.forEach((field, index) => {
      params[`populate[${index}]`] = field;
    });
  } else {
    params.populate = populate;
  }
  
  const response = await apiGet<StrapiResponse<StrapiEntity<ProductAttributes>[]>>(
    STRAPI_CONFIG.ENDPOINTS.PRODUCTS,
    params
  );
  
  return response;
};

/**
 * Get featured products
 */
export const getFeaturedProducts = async (
  limit?: number
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>[]>> => {
  return getProducts({
    featured: true,
    populate: '*',
    pagination: limit ? { pageSize: limit } : undefined,
    sort: ['createdAt:desc'],
  });
};

/**
 * Search products
 */
export const searchProducts = async (
  query: string,
  filters?: ProductFilters
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>[]>> => {
  return getProducts({
    ...filters,
    search: query,
    populate: '*',
  });
};

/**
 * Get products by category
 */
export const getProductsByCategory = async (
  categoryId: number | string,
  params?: Omit<ProductQueryParams, 'category'>
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>[]>> => {
  return getProducts({
    ...params,
    category: categoryId,
    populate: params?.populate || '*',
  });
};

/**
 * Create product (admin only)
 */
export const createProduct = async (
  productData: Partial<ProductAttributes>
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>>> => {
  return apiPost<StrapiResponse<StrapiEntity<ProductAttributes>>>(
    STRAPI_CONFIG.ENDPOINTS.PRODUCTS,
    { data: productData }
  );
};

/**
 * Update product (admin only)
 */
export const updateProduct = async (
  id: number | string,
  productData: Partial<ProductAttributes>
): Promise<StrapiResponse<StrapiEntity<ProductAttributes>>> => {
  return apiPut<StrapiResponse<StrapiEntity<ProductAttributes>>>(
    `${STRAPI_CONFIG.ENDPOINTS.PRODUCTS}/${id}`,
    { data: productData }
  );
};

/**
 * Delete product (admin only)
 */
export const deleteProduct = async (
  id: number | string
): Promise<ApiResponse<any>> => {
  return apiDelete(`${STRAPI_CONFIG.ENDPOINTS.PRODUCTS}/${id}`);
};

