import axios from 'axios';
import { movieSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// MODEL
import { GetMoviewType, PaginationRequest } from 'model';

// ACTION
const { setMoviewData, changeLoadingState } = movieSlice.actions;

const getMovieData =
  (data: PaginationRequest<GetMoviewType>): AppThunk =>
  async (dispatch) => {
    dispatch(changeLoadingState(true));

    //http://localhost:3030/movie?page=2&sort_by=primary_release_date.desc
    const response = await axios.get(`http://localhost:3030/movie?page=${data.page}&sort_by=${data.data}`);

    dispatch(
      setMoviewData({
        page: response.data.page,
        results: response.data.results || [],
        total_pages: response.data.total_pages,
        total_results: response.data.total_results
      })
    );

    dispatch(changeLoadingState(false));
  };

export { setMoviewData, changeLoadingState, getMovieData };
