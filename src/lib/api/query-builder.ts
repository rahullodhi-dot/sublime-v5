/**
 * Query Builder
 * Strapi-specific query parameter builder for consistent API calls
 */

import type {
  FilterCondition,
  SortOption,
  PaginationOptions,
  QueryOptions,
  FilterOperator,
} from "./types"

// ============================================================================
// Query Builder Class
// ============================================================================

export class QueryBuilder {
  private filters: FilterCondition[] = []
  private sorts: SortOption[] = []
  private pagination: PaginationOptions = {}
  private populateFields: string | string[] | Record<string, unknown> = "*"
  private selectFields: string[] = []
  private localeValue?: string

  // ---------------------------------------------------------------------------
  // Filters
  // ---------------------------------------------------------------------------

  where(field: string, operator: FilterOperator, value: unknown): this {
    this.filters.push({ field, operator, value })
    return this
  }

  whereEquals(field: string, value: unknown): this {
    return this.where(field, "$eq", value)
  }

  whereNot(field: string, value: unknown): this {
    return this.where(field, "$ne", value)
  }

  whereIn(field: string, values: unknown[]): this {
    return this.where(field, "$in", values)
  }

  whereNotIn(field: string, values: unknown[]): this {
    return this.where(field, "$notIn", values)
  }

  whereContains(field: string, value: string, caseInsensitive = true): this {
    return this.where(field, caseInsensitive ? "$containsi" : "$contains", value)
  }

  whereNull(field: string): this {
    return this.where(field, "$null", true)
  }

  whereNotNull(field: string): this {
    return this.where(field, "$notNull", true)
  }

  whereBetween(field: string, min: unknown, max: unknown): this {
    this.where(field, "$gte", min)
    this.where(field, "$lte", max)
    return this
  }

  whereGreaterThan(field: string, value: unknown): this {
    return this.where(field, "$gt", value)
  }

  whereLessThan(field: string, value: unknown): this {
    return this.where(field, "$lt", value)
  }

  // ---------------------------------------------------------------------------
  // Sorting
  // ---------------------------------------------------------------------------

  orderBy(field: string, order: "asc" | "desc" = "asc"): this {
    this.sorts.push({ field, order })
    return this
  }

  orderByDesc(field: string): this {
    return this.orderBy(field, "desc")
  }

  // ---------------------------------------------------------------------------
  // Pagination
  // ---------------------------------------------------------------------------

  page(page: number): this {
    this.pagination.page = page
    return this
  }

  pageSize(size: number): this {
    this.pagination.pageSize = size
    return this
  }

  limit(limit: number): this {
    this.pagination.limit = limit
    return this
  }

  paginate(page: number, pageSize: number): this {
    this.pagination = { page, pageSize }
    return this
  }

  // ---------------------------------------------------------------------------
  // Populate & Fields
  // ---------------------------------------------------------------------------

  populate(fields: string | string[] | Record<string, unknown>): this {
    this.populateFields = fields
    return this
  }

  populateAll(): this {
    this.populateFields = "*"
    return this
  }

  select(...fields: string[]): this {
    this.selectFields = fields
    return this
  }

  // ---------------------------------------------------------------------------
  // Locale
  // ---------------------------------------------------------------------------

  locale(locale: string): this {
    this.localeValue = locale
    return this
  }

  // ---------------------------------------------------------------------------
  // Build Query
  // ---------------------------------------------------------------------------

  build(): Record<string, string> {
    const params: Record<string, string> = {}

    // Build filters
    this.filters.forEach((filter, index) => {
      const { field, operator, value } = filter
      const path = field.split(".")
      
      if (path.length === 1) {
        if (operator === "$in" || operator === "$notIn") {
          const values = value as unknown[]
          values.forEach((v, i) => {
            params[`filters[${field}][${operator}][${i}]`] = String(v)
          })
        } else {
          params[`filters[${field}][${operator}]`] = String(value)
        }
      } else {
        // Nested field (e.g., category.id)
        let filterPath = "filters"
        path.forEach((p) => {
          filterPath += `[${p}]`
        })
        if (operator === "$in" || operator === "$notIn") {
          const values = value as unknown[]
          values.forEach((v, i) => {
            params[`${filterPath}[${operator}][${i}]`] = String(v)
          })
        } else {
          params[`${filterPath}[${operator}]`] = String(value)
        }
      }
    })

    // Build sort
    this.sorts.forEach((sort, index) => {
      params[`sort[${index}]`] = `${sort.field}:${sort.order}`
    })

    // Build pagination
    if (this.pagination.page !== undefined) {
      params["pagination[page]"] = String(this.pagination.page)
    }
    if (this.pagination.pageSize !== undefined) {
      params["pagination[pageSize]"] = String(this.pagination.pageSize)
    }
    if (this.pagination.limit !== undefined) {
      params["pagination[limit]"] = String(this.pagination.limit)
    }

    // Build populate
    if (this.populateFields) {
      if (typeof this.populateFields === "string") {
        params["populate"] = this.populateFields
      } else if (Array.isArray(this.populateFields)) {
        this.populateFields.forEach((field, index) => {
          params[`populate[${index}]`] = field
        })
      } else {
        // Deep populate object - serialize to query string
        const serializePopulate = (obj: Record<string, unknown>, prefix: string) => {
          Object.entries(obj).forEach(([key, value]) => {
            const path = prefix ? `${prefix}[${key}]` : `populate[${key}]`
            if (typeof value === "object" && value !== null) {
              serializePopulate(value as Record<string, unknown>, path)
            } else {
              params[path] = String(value)
            }
          })
        }
        serializePopulate(this.populateFields as Record<string, unknown>, "")
      }
    }

    // Build fields
    this.selectFields.forEach((field, index) => {
      params[`fields[${index}]`] = field
    })

    // Locale
    if (this.localeValue) {
      params["locale"] = this.localeValue
    }

    return params
  }

  // ---------------------------------------------------------------------------
  // Build URL
  // ---------------------------------------------------------------------------

  buildUrl(baseEndpoint: string): string {
    const params = this.build()
    const searchParams = new URLSearchParams(params)
    const queryString = searchParams.toString()
    return queryString ? `${baseEndpoint}?${queryString}` : baseEndpoint
  }

  // ---------------------------------------------------------------------------
  // Static Factory
  // ---------------------------------------------------------------------------

  static create(): QueryBuilder {
    return new QueryBuilder()
  }

  static fromOptions(options: QueryOptions): QueryBuilder {
    const builder = new QueryBuilder()

    if (options.filters) {
      options.filters.forEach((f) => builder.where(f.field, f.operator, f.value))
    }

    if (options.sort) {
      options.sort.forEach((s) => builder.orderBy(s.field, s.order))
    }

    if (options.pagination) {
      if (options.pagination.page) builder.page(options.pagination.page)
      if (options.pagination.pageSize) builder.pageSize(options.pagination.pageSize)
      if (options.pagination.limit) builder.limit(options.pagination.limit)
    }

    if (options.populate) {
      builder.populate(options.populate)
    }

    if (options.fields) {
      builder.select(...options.fields)
    }

    if (options.locale) {
      builder.locale(options.locale)
    }

    return builder
  }
}

// ============================================================================
// Helper Functions
// ============================================================================

export function createQuery(): QueryBuilder {
  return QueryBuilder.create()
}

export function queryFromOptions(options: QueryOptions): QueryBuilder {
  return QueryBuilder.fromOptions(options)
}

