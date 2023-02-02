import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getMovies();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createMovies = createAsyncThunk(
  "movie/createMovies",
  async ({ updateMovieData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createMovies(updateMovieData);
      toast.success("Pelicula agregada");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getMovie(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message.data);
    }
  }
);

export const updateMovie = createAsyncThunk(
  "movie/updateMovie",
  async ({ id, updatedMovieData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateMovie(updatedMovieData, id);

      toast.success("Película actualizada");
      navigate("/");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

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
    [createMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [createMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = [action.payload];
    },
    [createMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movie = action.payload;
    },
    [getMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [updateMovie.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action)
      const {
        arg: {id},
      } = action.meta

      if(id) {
        state.movies = state.movies.map((item) => item._id === id ? action.payload : item)
      }
    },
    [updateMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default movieSlice.reducer;
