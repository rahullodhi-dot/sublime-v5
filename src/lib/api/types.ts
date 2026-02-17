/**
 * Core API Types
 * Centralized type definitions for all API operations
 */

// ============================================================================
// API Response Types
// ============================================================================

export interface ApiError {
  status: number
  code: string
  message: string
  details?: Record<string, unknown>
}

export interface ApiMeta {
  pagination?: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface ApiResponse<T> {
  data: T
  meta?: ApiMeta
  error?: ApiError
}

export interface ApiListResponse<T> extends ApiResponse<T[]> {}

export interface ApiSingleResponse<T> extends ApiResponse<T> {}

// ============================================================================
// Request Types
// ============================================================================

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface RequestConfig {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: unknown
  timeout?: number
  cache?: RequestCache
  signal?: AbortSignal
}

// ============================================================================
// Query Builder Types
// ============================================================================

export type FilterOperator =
  | "$eq"
  | "$ne"
  | "$lt"
  | "$lte"
  | "$gt"
  | "$gte"
  | "$in"
  | "$notIn"
  | "$contains"
  | "$notContains"
  | "$containsi"
  | "$notContainsi"
  | "$null"
  | "$notNull"
  | "$between"
  | "$startsWith"
  | "$startsWithi"
  | "$endsWith"
  | "$endsWithi"

export interface FilterCondition {
  field: string
  operator: FilterOperator
  value: unknown
}

export interface SortOption {
  field: string
  order: "asc" | "desc"
}

export interface PaginationOptions {
  page?: number
  pageSize?: number
  limit?: number
}

export interface QueryOptions {
  filters?: FilterCondition[]
  sort?: SortOption[]
  pagination?: PaginationOptions
  populate?: string | string[] | Record<string, unknown>
  fields?: string[]
  locale?: string
}

// ============================================================================
// Service Types
// ============================================================================

export interface ServiceConfig {
  endpoint: string
  defaultPopulate?: string | string[]
}

// ============================================================================
// Hook Types
// ============================================================================

export interface UseQueryOptions {
  enabled?: boolean
  refetchOnMount?: boolean
  staleTime?: number
}

export interface UseQueryResult<T> {
  data: T | null
  isLoading: boolean
  isError: boolean
  error: ApiError | null
  refetch: () => Promise<void>
}

export interface UseMutationResult<T, V> {
  data: T | null
  isLoading: boolean
  isError: boolean
  error: ApiError | null
  mutate: (variables: V) => Promise<T>
  reset: () => void
}

