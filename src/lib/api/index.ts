/**
 * API Library
 * Centralized, consistent API pattern for all integrations
 *
 * @example
 * ```ts
 * // Using the API client directly
 * import { api } from "@/lib/api"
 * const data = await api.get("/api/products")
 *
 * // Using the query builder
 * import { createQuery } from "@/lib/api"
 * const query = createQuery()
 *   .whereEquals("isActive", true)
 *   .orderBy("createdAt", "desc")
 *   .paginate(1, 10)
 * const url = query.buildUrl("/api/products")
 *
 * // Using hooks
 * import { useApiQuery } from "@/lib/api"
 * const { data, isLoading, error } = useApiQuery(
 *   () => productsService.getAll(),
 *   []
 * )
 *
 * // Creating a service
 * import { BaseService } from "@/lib/api"
 * class ProductsService extends BaseService<Product> {
 *   protected readonly endpoint = "/products"
 * }
 * ```
 */

// Core client
export { default as api, tokenManager, ApiException, uploadFile } from "./client"

// Query builder
export { QueryBuilder, createQuery, queryFromOptions } from "./query-builder"

// Base service
export { BaseService, createService } from "./base-service"
export type { ServiceEntity, CreateInput, UpdateInput } from "./base-service"

// Hooks
export {
  useApiQuery,
  useApiMutation,
  useApiList,
  useApiInfinite,
} from "./hooks"
export type {
  UseApiQueryOptions,
  UseApiQueryResult,
  UseApiMutationOptions,
  UseApiMutationResult,
  UseApiListOptions,
  UseApiListResult,
  UseApiInfiniteResult,
} from "./hooks"

// Types
export type {
  ApiError,
  ApiMeta,
  ApiResponse,
  ApiListResponse,
  ApiSingleResponse,
  HttpMethod,
  RequestConfig,
  FilterOperator,
  FilterCondition,
  SortOption,
  PaginationOptions,
  QueryOptions,
  ServiceConfig,
  UseQueryOptions,
  UseQueryResult,
  UseMutationResult,
} from "./types"

