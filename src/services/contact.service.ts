/**
 * Contact Service
 * Handles contact form submissions to Strapi
 */

import { apiPost } from '../utils/api';
import { STRAPI_CONFIG } from '../config/strapi.config';
import type { ContactFormRequest, ContactFormResponse } from '../types/strapi.types';

/**
 * Submit contact form
 */
export const submitContactForm = async (
  data: ContactFormRequest
): Promise<ContactFormResponse> => {
  const response = await apiPost<ContactFormResponse>(
    STRAPI_CONFIG.ENDPOINTS.CONTACT,
    data
  );
  return response;
};

