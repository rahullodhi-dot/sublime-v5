/**
 * API Utility Functions
 * Handles all HTTP requests to Strapi CMS
 */

import { STRAPI_CONFIG, getStrapiUrl } from '../config/strapi.config';

export interface ApiError {
  error: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}

export interface ApiResponse<T> {
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

/**
 * Default headers for API requests
 */
const getDefaultHeaders = (includeAuth = false): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add API token if provided and needed
  if (includeAuth && STRAPI_CONFIG.API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_CONFIG.API_TOKEN}`;
  }

  // Add JWT token from localStorage if user is authenticated
  const token = localStorage.getItem('authToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

/**
 * Generic API request function
 */
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = getStrapiUrl(endpoint);
  const includeAuth = options.method === 'POST' || options.method === 'PUT' || options.method === 'DELETE';

  const config: RequestInit = {
    ...options,
    headers: {
      ...getDefaultHeaders(includeAuth),
      ...options.headers,
    },
    signal: AbortSignal.timeout(STRAPI_CONFIG.TIMEOUT),
  };

  try {
    const response = await fetch(url, config);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      return text as unknown as T;
    }

    const data = await response.json();

    if (!response.ok) {
      const error: ApiError = {
        error: {
          status: response.status,
          name: data.error?.name || 'Error',
          message: data.error?.message || data.message || `HTTP error! status: ${response.status}`,
          details: data.error?.details,
        },
      };
      throw error;
    }

    // Return data directly (handles both {data: ...} and direct response formats)
    return data as T;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout. Please try again.');
    }
    throw error;
  }
};

/**
 * GET request
 */
export const apiGet = <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
  let url = endpoint;
  
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => searchParams.append(key, String(v)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });
    url = `${endpoint}?${searchParams.toString()}`;
  }

  return apiRequest<T>(url, {
    method: 'GET',
  });
};

/**
 * POST request
 */
export const apiPost = <T>(
  endpoint: string,
  data?: any,
  options?: RequestInit
): Promise<T> => {
  return apiRequest<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
};

/**
 * PUT request
 */
export const apiPut = <T>(
  endpoint: string,
  data?: any,
  options?: RequestInit
): Promise<T> => {
  return apiRequest<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
};

/**
 * DELETE request
 */
export const apiDelete = <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  return apiRequest<T>(endpoint, {
    method: 'DELETE',
    ...options,
  });
};

/**
 * Upload file to Strapi
 */
export const apiUpload = async <T>(
  endpoint: string,
  file: File,
  additionalData?: Record<string, any>
): Promise<T> => {
  const url = getStrapiUrl(endpoint);
  const token = localStorage.getItem('authToken');

  const formData = new FormData();
  formData.append('files', file);

  if (additionalData) {
    Object.entries(additionalData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
      }
    });
  }

  const headers: HeadersInit = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      const error: ApiError = {
        error: {
          status: response.status,
          name: data.error?.name || 'Error',
          message: data.error?.message || `HTTP error! status: ${response.status}`,
          details: data.error?.details,
        },
      };
      throw error;
    }

    return data;
  } catch (error: any) {
    throw error;
  }
};

