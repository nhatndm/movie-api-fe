// BASE
import { BasePaginationSlice } from './base';

export enum GetMoviewType {
  POPULAR = 'popularity.desc',
  LATEST = 'primary_release_date.desc'
}

export interface Movie {
  id: number;
  adult: boolean;
  original_language: string;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
}

export interface MovieSlice extends BasePaginationSlice<Movie> {}
