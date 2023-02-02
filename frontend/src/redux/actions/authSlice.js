// Dependencia redux para el middleware y creación del slice para los reducers
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Importamos peticiones de la API
import * as api from "../api";

// Función para el inicio de sesión
export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);

      toast.success("Ingreso correcto");

      navigate("/");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Función para el registro
export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);

      toast.success("Registro correcto");

      navigate("/login");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },

  reducers: {
    // Persistencia del usuario que inicia sesión
    setUser: (state, action) => {
      state.user = action.payload;
    },

    // Función para cerrar la sesión
    setLogout: (state, action) => {
      localStorage.clear()
      state.user = null
    }
  },

  extraReducers: {
    // Login
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    // Register
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
