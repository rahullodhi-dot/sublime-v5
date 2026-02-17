/**
 * API Hooks
 * React hooks for consistent data fetching patterns
 */

import { useState, useEffect, useCallback, useRef } from "react"
import type { ApiError, ApiResponse, ApiListResponse, QueryOptions } from "./types"
import { ApiException } from "./client"

// ============================================================================
// Types
// ============================================================================

export interface UseApiQueryOptions<T> {
  enabled?: boolean
  initialData?: T
  onSuccess?: (data: T) => void
  onError?: (error: ApiError) => void
  refetchInterval?: number
}

export interface UseApiQueryResult<T> {
  data: T | null
  isLoading: boolean
  isError: boolean
  error: ApiError | null
  refetch: () => Promise<void>
  isFetching: boolean
}

export interface UseApiMutationOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: ApiError) => void
  onSettled?: () => void
}

export interface UseApiMutationResult<T, TVariables> {
  data: T | null
  isLoading: boolean
  isError: boolean
  error: ApiError | null
  mutate: (variables: TVariables) => Promise<T | null>
  mutateAsync: (variables: TVariables) => Promise<T>
  reset: () => void
  isSuccess: boolean
}

// ============================================================================
// useApiQuery Hook
// ============================================================================

export function useApiQuery<T>(
  queryFn: () => Promise<T>,
  deps: unknown[] = [],
  options: UseApiQueryOptions<T> = {}
): UseApiQueryResult<T> {
  const { enabled = true, initialData = null, onSuccess, onError, refetchInterval } = options

  const [data, setData] = useState<T | null>(initialData)
  const [isLoading, setIsLoading] = useState(enabled)
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)

  const mountedRef = useRef(true)
  const intervalRef = useRef<number | null>(null)

  const fetchData = useCallback(async () => {
    if (!enabled) return

    setIsFetching(true)
    setIsError(false)
    setError(null)

    try {
      const result = await queryFn()
      if (mountedRef.current) {
        setData(result)
        onSuccess?.(result)
      }
    } catch (err) {
      if (mountedRef.current) {
        const apiError =
          err instanceof ApiException
            ? err.toApiError()
            : { status: 0, code: "UNKNOWN", message: String(err) }
        setIsError(true)
        setError(apiError)
        onError?.(apiError)
      }
    } finally {
      if (mountedRef.current) {
        setIsLoading(false)
        setIsFetching(false)
      }
    }
  }, [queryFn, enabled, onSuccess, onError])

  useEffect(() => {
    mountedRef.current = true
    fetchData()

    if (refetchInterval && refetchInterval > 0) {
      intervalRef.current = window.setInterval(fetchData, refetchInterval)
    }

    return () => {
      mountedRef.current = false
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [...deps, enabled])

  const refetch = useCallback(async () => {
    await fetchData()
  }, [fetchData])

  return {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  }
}

// ============================================================================
// useApiMutation Hook
// ============================================================================

export function useApiMutation<T, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<T>,
  options: UseApiMutationOptions<T> = {}
): UseApiMutationResult<T, TVariables> {
  const { onSuccess, onError, onSettled } = options

  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)

  const mutateAsync = useCallback(
    async (variables: TVariables): Promise<T> => {
      setIsLoading(true)
      setIsError(false)
      setIsSuccess(false)
      setError(null)

      try {
        const result = await mutationFn(variables)
        setData(result)
        setIsSuccess(true)
        onSuccess?.(result)
        return result
      } catch (err) {
        const apiError =
          err instanceof ApiException
            ? err.toApiError()
            : { status: 0, code: "UNKNOWN", message: String(err) }
        setIsError(true)
        setError(apiError)
        onError?.(apiError)
        throw err
      } finally {
        setIsLoading(false)
        onSettled?.()
      }
    },
    [mutationFn, onSuccess, onError, onSettled]
  )

  const mutate = useCallback(
    async (variables: TVariables): Promise<T | null> => {
      try {
        return await mutateAsync(variables)
      } catch {
        return null
      }
    },
    [mutateAsync]
  )

  const reset = useCallback(() => {
    setData(null)
    setIsLoading(false)
    setIsError(false)
    setIsSuccess(false)
    setError(null)
  }, [])

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    mutate,
    mutateAsync,
    reset,
  }
}

// ============================================================================
// useApiList Hook - For paginated lists
// ============================================================================

export interface UseApiListOptions<T> extends UseApiQueryOptions<ApiListResponse<T>> {
  page?: number
  pageSize?: number
}

export interface UseApiListResult<T> extends Omit<UseApiQueryResult<ApiListResponse<T>>, "data"> {
  items: T[]
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  } | null
  hasNextPage: boolean
  hasPrevPage: boolean
  goToPage: (page: number) => void
}

export function useApiList<T>(
  queryFn: (page: number, pageSize: number) => Promise<ApiListResponse<T>>,
  deps: unknown[] = [],
  options: UseApiListOptions<T> = {}
): UseApiListResult<T> {
  const { page: initialPage = 1, pageSize: initialPageSize = 10, ...queryOptions } = options

  const [page, setPage] = useState(initialPage)
  const [pageSize] = useState(initialPageSize)

  const result = useApiQuery(
    () => queryFn(page, pageSize),
    [...deps, page, pageSize],
    queryOptions as UseApiQueryOptions<ApiListResponse<T>>
  )

  const pagination = result.data?.meta?.pagination || null
  const hasNextPage = pagination ? pagination.page < pagination.pageCount : false
  const hasPrevPage = pagination ? pagination.page > 1 : false

  const goToPage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  return {
    ...result,
    items: result.data?.data || [],
    pagination,
    hasNextPage,
    hasPrevPage,
    goToPage,
  }
}

// ============================================================================
// useApiInfinite Hook - For infinite scroll
// ============================================================================

export interface UseApiInfiniteResult<T> {
  items: T[]
  isLoading: boolean
  isLoadingMore: boolean
  isError: boolean
  error: ApiError | null
  hasMore: boolean
  loadMore: () => Promise<void>
  refetch: () => Promise<void>
}

export function useApiInfinite<T>(
  queryFn: (page: number, pageSize: number) => Promise<ApiListResponse<T>>,
  deps: unknown[] = [],
  options: { pageSize?: number } = {}
): UseApiInfiniteResult<T> {
  const { pageSize = 10 } = options

  const [items, setItems] = useState<T[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)
  const [hasMore, setHasMore] = useState(true)

  const fetchPage = useCallback(
    async (pageNum: number, append: boolean = false) => {
      if (append) {
        setIsLoadingMore(true)
      } else {
        setIsLoading(true)
      }
      setIsError(false)
      setError(null)

      try {
        const response = await queryFn(pageNum, pageSize)
        const newItems = response.data || []
        const pagination = response.meta?.pagination

        if (append) {
          setItems((prev) => [...prev, ...newItems])
        } else {
          setItems(newItems)
        }

        setHasMore(pagination ? pagination.page < pagination.pageCount : false)
        setPage(pageNum)
      } catch (err) {
        const apiError =
          err instanceof ApiException
            ? err.toApiError()
            : { status: 0, code: "UNKNOWN", message: String(err) }
        setIsError(true)
        setError(apiError)
      } finally {
        setIsLoading(false)
        setIsLoadingMore(false)
      }
    },
    [queryFn, pageSize]
  )

  useEffect(() => {
    fetchPage(1, false)
  }, deps)

  const loadMore = useCallback(async () => {
    if (!isLoadingMore && hasMore) {
      await fetchPage(page + 1, true)
    }
  }, [fetchPage, page, isLoadingMore, hasMore])

  const refetch = useCallback(async () => {
    setItems([])
    await fetchPage(1, false)
  }, [fetchPage])

  return {
    items,
    isLoading,
    isLoadingMore,
    isError,
    error,
    hasMore,
    loadMore,
    refetch,
  }
}

