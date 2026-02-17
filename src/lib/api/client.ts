/**
 * API Client
 * Centralized HTTP client for all API requests
 */

import type { ApiError, ApiResponse, RequestConfig, HttpMethod } from "./types"

// ============================================================================
// Configuration
// ============================================================================

const API_CONFIG = {
  baseUrl: import.meta.env.VITE_STRAPI_URL || "http://localhost:1337",
  timeout: 30000,
  retries: 1,
} as const

// ============================================================================
// Token Management
// ============================================================================

export const tokenManager = {
  getToken: (): string | null => localStorage.getItem("authToken"),
  setToken: (token: string): void => localStorage.setItem("authToken", token),
  removeToken: (): void => localStorage.removeItem("authToken"),
  isAuthenticated: (): boolean => !!localStorage.getItem("authToken"),
}

// ============================================================================
// Error Handling
// ============================================================================

export class ApiException extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details?: Record<string, unknown>
  ) {
    super(message)
    this.name = "ApiException"
  }

  toApiError(): ApiError {
    return {
      status: this.status,
      code: this.code,
      message: this.message,
      details: this.details,
    }
  }
}

function createApiError(status: number, data: unknown): ApiException {
  if (data && typeof data === "object" && "error" in data) {
    const error = (data as { error: { name?: string; message?: string; details?: unknown } }).error
    return new ApiException(
      status,
      error.name || "UNKNOWN_ERROR",
      error.message || "An unknown error occurred",
      error.details as Record<string, unknown>
    )
  }
  return new ApiException(status, "UNKNOWN_ERROR", "An unknown error occurred")
}

// ============================================================================
// Request Builder
// ============================================================================

function buildUrl(endpoint: string, baseUrl: string = API_CONFIG.baseUrl): string {
  const cleanBase = baseUrl.replace(/\/$/, "")
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  return `${cleanBase}${cleanEndpoint}`
}

function buildHeaders(config: RequestConfig, includeAuth: boolean): Headers {
  const headers = new Headers({
    "Content-Type": "application/json",
    ...config.headers,
  })

  if (includeAuth) {
    const token = tokenManager.getToken()
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
  }

  return headers
}

// ============================================================================
// Core Request Function
// ============================================================================

async function request<T>(
  endpoint: string,
  config: RequestConfig = {}
): Promise<T> {
  const method = config.method || "GET"
  const includeAuth = method !== "GET" || tokenManager.isAuthenticated()
  const url = buildUrl(endpoint)

  const fetchConfig: RequestInit = {
    method,
    headers: buildHeaders(config, includeAuth),
    signal: config.signal || AbortSignal.timeout(config.timeout || API_CONFIG.timeout),
    cache: config.cache,
  }

  if (config.body && method !== "GET") {
    fetchConfig.body = JSON.stringify(config.body)
  }

  try {
    const response = await fetch(url, fetchConfig)

    // Handle non-JSON responses
    const contentType = response.headers.get("content-type")
    if (!contentType?.includes("application/json")) {
      if (!response.ok) {
        throw new ApiException(response.status, "HTTP_ERROR", `HTTP error: ${response.status}`)
      }
      return (await response.text()) as unknown as T
    }

    const data = await response.json()

    if (!response.ok) {
      throw createApiError(response.status, data)
    }

    return data as T
  } catch (error) {
    if (error instanceof ApiException) {
      throw error
    }
    if (error instanceof Error) {
      if (error.name === "AbortError" || error.name === "TimeoutError") {
        throw new ApiException(408, "TIMEOUT", "Request timeout. Please try again.")
      }
      throw new ApiException(0, "NETWORK_ERROR", error.message)
    }
    throw new ApiException(0, "UNKNOWN_ERROR", "An unknown error occurred")
  }
}

// ============================================================================
// HTTP Method Helpers
// ============================================================================

export const api = {
  get: <T>(endpoint: string, config?: Omit<RequestConfig, "method" | "body">): Promise<T> =>
    request<T>(endpoint, { ...config, method: "GET" }),

  post: <T>(endpoint: string, body?: unknown, config?: Omit<RequestConfig, "method">): Promise<T> =>
    request<T>(endpoint, { ...config, method: "POST", body }),

  put: <T>(endpoint: string, body?: unknown, config?: Omit<RequestConfig, "method">): Promise<T> =>
    request<T>(endpoint, { ...config, method: "PUT", body }),

  patch: <T>(endpoint: string, body?: unknown, config?: Omit<RequestConfig, "method">): Promise<T> =>
    request<T>(endpoint, { ...config, method: "PATCH", body }),

  delete: <T>(endpoint: string, config?: Omit<RequestConfig, "method" | "body">): Promise<T> =>
    request<T>(endpoint, { ...config, method: "DELETE" }),
}

// ============================================================================
// File Upload
// ============================================================================

export async function uploadFile<T>(
  endpoint: string,
  file: File,
  additionalData?: Record<string, unknown>
): Promise<T> {
  const url = buildUrl(endpoint)
  const token = tokenManager.getToken()

  const formData = new FormData()
  formData.append("files", file)

  if (additionalData) {
    Object.entries(additionalData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, typeof value === "object" ? JSON.stringify(value) : String(value))
      }
    })
  }

  const headers: HeadersInit = {}
  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: formData,
  })

  const data = await response.json()

  if (!response.ok) {
    throw createApiError(response.status, data)
  }

  return data as T
}

export default api

