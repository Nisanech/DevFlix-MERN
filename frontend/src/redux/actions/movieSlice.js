import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getMovies()
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
    movies: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default movieSlice.reducer