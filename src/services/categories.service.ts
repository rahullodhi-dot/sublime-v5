/**
 * Categories Service
 * Handles all category-related API calls to Strapi
 */

import { apiGet, apiPost, apiPut, apiDelete } from '../utils/api';
import { STRAPI_CONFIG } from '../config/strapi.config';
import type {
  StrapiEntity,
  StrapiResponse,
  CategoryAttributes,
} from '../types/strapi.types';
import type { ApiResponse } from '../utils/api';

export interface CategoryQueryParams {
  populate?: string | string[];
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  fields?: string[];
  locale?: string;
  filters?: {
    parent?: number | null;
    [key: string]: any;
  };
}

/**
 * Get all categories
 */
export const getCategories = async (
  params?: CategoryQueryParams
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>[]>> => {
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
    if (params.filters) {
      if (params.filters.parent !== undefined) {
        if (params.filters.parent === null) {
          queryParams['filters[parent][$null]'] = true;
        } else {
          queryParams['filters[parent][id][$eq]'] = params.filters.parent;
        }
      }
      
      // Handle other filters
      Object.entries(params.filters).forEach(([key, value]) => {
        if (key !== 'parent' && value !== undefined && value !== null) {
          queryParams[`filters[${key}][$eq]`] = value;
        }
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
  
  return apiGet<StrapiResponse<StrapiEntity<CategoryAttributes>[]>>(
    STRAPI_CONFIG.ENDPOINTS.CATEGORIES,
    queryParams
  );
};

/**
 * Get category by ID
 */
export const getCategory = async (
  id: number | string,
  populate: string | string[] = '*'
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>>> => {
  const params: Record<string, any> = {};
  
  if (Array.isArray(populate)) {
    populate.forEach((field, index) => {
      params[`populate[${index}]`] = field;
    });
  } else {
    params.populate = populate;
  }
  
  return apiGet<StrapiResponse<StrapiEntity<CategoryAttributes>>>(
    `${STRAPI_CONFIG.ENDPOINTS.CATEGORIES}/${id}`,
    params
  );
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = async (
  slug: string,
  populate: string | string[] = '*'
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>[]>> => {
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
  
  const response = await apiGet<StrapiResponse<StrapiEntity<CategoryAttributes>[]>>(
    STRAPI_CONFIG.ENDPOINTS.CATEGORIES,
    params
  );
  
  return response;
};

/**
 * Get top-level categories (no parent)
 */
export const getTopLevelCategories = async (
  params?: Omit<CategoryQueryParams, 'filters'>
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>[]>> => {
  return getCategories({
    ...params,
    filters: {
      parent: null,
    },
    populate: params?.populate || '*',
  });
};

/**
 * Get subcategories by parent ID
 */
export const getSubcategories = async (
  parentId: number | string,
  params?: Omit<CategoryQueryParams, 'filters'>
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>[]>> => {
  return getCategories({
    ...params,
    filters: {
      parent: Number(parentId),
    },
    populate: params?.populate || '*',
  });
};

/**
 * Create category (admin only)
 */
export const createCategory = async (
  categoryData: Partial<CategoryAttributes>
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>>> => {
  return apiPost<StrapiResponse<StrapiEntity<CategoryAttributes>>>(
    STRAPI_CONFIG.ENDPOINTS.CATEGORIES,
    { data: categoryData }
  );
};

/**
 * Update category (admin only)
 */
export const updateCategory = async (
  id: number | string,
  categoryData: Partial<CategoryAttributes>
): Promise<StrapiResponse<StrapiEntity<CategoryAttributes>>> => {
  return apiPut<StrapiResponse<StrapiEntity<CategoryAttributes>>>(
    `${STRAPI_CONFIG.ENDPOINTS.CATEGORIES}/${id}`,
    { data: categoryData }
  );
};

/**
 * Delete category (admin only)
 */
export const deleteCategory = async (
  id: number | string
): Promise<ApiResponse<any>> => {
  return apiDelete(`${STRAPI_CONFIG.ENDPOINTS.CATEGORIES}/${id}`);
};

