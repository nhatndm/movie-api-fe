export interface PaginationRequest<T> {
  page: number;
  data: T;
}

export interface Pagination<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}

export interface BasePaginationSlice<T> extends Pagination<T> {
  loading: boolean;
}
