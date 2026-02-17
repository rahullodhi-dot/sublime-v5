/**
 * Base Service
 * Abstract base class for all API services providing consistent patterns
 */

import api from "./client"
import { QueryBuilder, createQuery } from "./query-builder"
import type { ApiResponse, ApiListResponse, QueryOptions } from "./types"

// ============================================================================
// Types
// ============================================================================

export interface ServiceEntity {
  id: number
  [key: string]: unknown
}

export interface CreateInput {
  [key: string]: unknown
}

export interface UpdateInput {
  [key: string]: unknown
}

// ============================================================================
// Base Service Class
// ============================================================================

export abstract class BaseService<
  TEntity extends ServiceEntity,
  TCreateInput extends CreateInput = CreateInput,
  TUpdateInput extends UpdateInput = UpdateInput
> {
  protected abstract readonly endpoint: string
  protected readonly defaultPopulate: string | string[] = "*"

  // ---------------------------------------------------------------------------
  // Query Builder Helper
  // ---------------------------------------------------------------------------

  protected query(): QueryBuilder {
    return createQuery().populate(this.defaultPopulate)
  }

  // ---------------------------------------------------------------------------
  // CRUD Operations
  // ---------------------------------------------------------------------------

  /**
   * Get all entities with optional query options
   */
  async getAll(options?: QueryOptions): Promise<ApiListResponse<TEntity>> {
    const query = options
      ? QueryBuilder.fromOptions(options)
      : this.query()
    
    if (!options?.populate) {
      query.populate(this.defaultPopulate)
    }

    const url = query.buildUrl(`/api${this.endpoint}`)
    return api.get<ApiListResponse<TEntity>>(url)
  }

  /**
   * Get a single entity by ID
   */
  async getById(id: number | string, populate?: string | string[]): Promise<ApiResponse<TEntity>> {
    const query = this.query()
    if (populate) {
      query.populate(populate)
    }
    const url = query.buildUrl(`/api${this.endpoint}/${id}`)
    return api.get<ApiResponse<TEntity>>(url)
  }

  /**
   * Get entities by a specific field value
   */
  async getByField(
    field: string,
    value: unknown,
    options?: Omit<QueryOptions, "filters">
  ): Promise<ApiListResponse<TEntity>> {
    const query = options
      ? QueryBuilder.fromOptions(options)
      : this.query()

    query.whereEquals(field, value)

    if (!options?.populate) {
      query.populate(this.defaultPopulate)
    }

    const url = query.buildUrl(`/api${this.endpoint}`)
    return api.get<ApiListResponse<TEntity>>(url)
  }

  /**
   * Get a single entity by slug
   */
  async getBySlug(slug: string, populate?: string | string[]): Promise<TEntity | null> {
    const query = this.query().whereEquals("slug", slug)
    if (populate) {
      query.populate(populate)
    }

    const url = query.buildUrl(`/api${this.endpoint}`)
    const response = await api.get<ApiListResponse<TEntity>>(url)

    return response.data?.[0] || null
  }

  /**
   * Create a new entity
   */
  async create(data: TCreateInput): Promise<ApiResponse<TEntity>> {
    return api.post<ApiResponse<TEntity>>(`/api${this.endpoint}`, { data })
  }

  /**
   * Update an existing entity
   */
  async update(id: number | string, data: TUpdateInput): Promise<ApiResponse<TEntity>> {
    return api.put<ApiResponse<TEntity>>(`/api${this.endpoint}/${id}`, { data })
  }

  /**
   * Delete an entity
   */
  async delete(id: number | string): Promise<ApiResponse<TEntity>> {
    return api.delete<ApiResponse<TEntity>>(`/api${this.endpoint}/${id}`)
  }

  // ---------------------------------------------------------------------------
  // Query Helpers
  // ---------------------------------------------------------------------------

  /**
   * Get paginated entities
   */
  async paginate(
    page: number,
    pageSize: number,
    options?: Omit<QueryOptions, "pagination">
  ): Promise<ApiListResponse<TEntity>> {
    return this.getAll({
      ...options,
      pagination: { page, pageSize },
    })
  }

  /**
   * Search entities by a field
   */
  async search(
    searchField: string,
    searchTerm: string,
    options?: QueryOptions
  ): Promise<ApiListResponse<TEntity>> {
    const query = options
      ? QueryBuilder.fromOptions(options)
      : this.query()

    query.whereContains(searchField, searchTerm, true)

    if (!options?.populate) {
      query.populate(this.defaultPopulate)
    }

    const url = query.buildUrl(`/api${this.endpoint}`)
    return api.get<ApiListResponse<TEntity>>(url)
  }

  /**
   * Get entities where a field is active/true
   */
  async getActive(options?: QueryOptions): Promise<ApiListResponse<TEntity>> {
    const query = options
      ? QueryBuilder.fromOptions(options)
      : this.query()

    query.whereEquals("isActive", true)

    if (!options?.populate) {
      query.populate(this.defaultPopulate)
    }

    const url = query.buildUrl(`/api${this.endpoint}`)
    return api.get<ApiListResponse<TEntity>>(url)
  }

  /**
   * Get entities ordered by a field
   */
  async getOrdered(
    orderField: string = "order",
    direction: "asc" | "desc" = "asc",
    options?: QueryOptions
  ): Promise<ApiListResponse<TEntity>> {
    const query = options
      ? QueryBuilder.fromOptions(options)
      : this.query()

    query.orderBy(orderField, direction)

    if (!options?.populate) {
      query.populate(this.defaultPopulate)
    }

    const url = query.buildUrl(`/api${this.endpoint}`)
    return api.get<ApiListResponse<TEntity>>(url)
  }

  /**
   * Count entities with optional filters
   */
  async count(options?: QueryOptions): Promise<number> {
    const response = await this.getAll({
      ...options,
      pagination: { pageSize: 1 },
    })
    return response.meta?.pagination?.total || 0
  }
}

// ============================================================================
// Service Factory
// ============================================================================

export function createService<T extends ServiceEntity>(
  endpoint: string,
  defaultPopulate: string | string[] = "*"
) {
  return new (class extends BaseService<T> {
    protected readonly endpoint = endpoint
    protected readonly defaultPopulate = defaultPopulate
  })()
}

