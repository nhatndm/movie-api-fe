import { RootState } from 'redux/type';

// MODEL
import { Pagination, Movie } from 'model';

export const selectMovieData = (state: RootState): Pagination<Movie> => {
  return {
    results: state.movieReducer.results,
    total_pages: state.movieReducer.total_pages,
    total_results: state.movieReducer.total_results,
    page: state.movieReducer.page
  };
};
