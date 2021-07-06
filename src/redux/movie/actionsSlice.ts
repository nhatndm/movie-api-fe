import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { MovieSlice, Movie, Pagination } from 'model';

// ACTION TO CHANGE STATE
export const setMoviewData: CaseReducer<MovieSlice, PayloadAction<Pagination<Movie>>> = (state, action) => {
  state.results = action.payload.results;
  state.page = action.payload.page;
  state.total_pages = action.payload.total_pages;
  state.total_results = action.payload.total_results;
};

// ACTION TO CHANGE STATE
export const changeLoadingState: CaseReducer<MovieSlice, PayloadAction<boolean>> = (state, action) => {
  state.loading = action.payload;
};
