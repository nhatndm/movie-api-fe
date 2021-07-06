import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// MODEL
import { MovieSlice } from 'model';

// ACTION SLICE
import { setMoviewData, changeLoadingState } from './actionsSlice';

const initialState: MovieSlice = {
  results: [],
  loading: false,
  total_pages: 0,
  total_results: 0,
  page: 1
};

export const movieSlice = createSlice({
  name: Domain.Movie,
  initialState,
  reducers: {
    setMoviewData,
    changeLoadingState
  }
});

// REDUCER
export default movieSlice.reducer;
