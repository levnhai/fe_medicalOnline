import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/axios';

export const login = createAsyncThunk('accounts/login', async (credentials) => {
  try {
    const response = await axios.post('/login', {
      email: credentials.email || null,
      username: credentials.username || null,
      password: credentials.password,
    });
    console.log('Server response:', response.data);  
    return response.data;
  } catch (error) {
    console.error('Error in login thunk:', error.response?.data || error.message);  
    throw new Error(error.response?.data?.message || 'Login failed');
  }
});

export const register = createAsyncThunk('account/register', async (userData) => {
  try {
    const response = await axios.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error("Error from API:", error.response.data);
    throw new Error(error.response.data.message);
  }
});

const accountSlice = createSlice({
  name: 'accounts',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('Login fulfilled:', action.payload);  // Debug log
        state.loading = false;
        state.user = action.payload; 
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        console.error('Login rejected:', action.error);  // Debug log
        state.loading = false;
        state.error = action.error.message || 'Đăng nhập thất bại';
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, setToken  } = accountSlice.actions;

const accountReducer = accountSlice.reducer;
export default accountReducer;