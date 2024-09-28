import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/axios';

const API_URL = process.env.REACT_APP_API_URL;

// check phone number
export const fetchCheckPhone = createAsyncThunk('authSlice/fetchCheckPhone', async (phoneNumber) => {
  try {
    console.log('checl phone', phoneNumber);
    const response = await axios.post('/check-phone', { phoneNumber });
    console.log('check response: ', response);
    // return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
// google login
export const googleLogin = createAsyncThunk(
  'authSlice/googleLogin',
  async (token) => {
    try {
      const response = await axios.post(`${API_URL}/google-login`, { token });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred');
    }
  }
);
//fb login
export const facebookLogin = createAsyncThunk(
  'authSlice/facebookLogin',
  async (accessToken) => {
    try {
      const response = await axios.post(`${API_URL}/facebook-login`, { accessToken });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred');
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    phoneNumber: null,
    isPhoneNumber: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    phoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get top docter
    builder
      .addCase(fetchCheckPhone.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCheckPhone.fulfilled, (state, action) => {
        state.loading = false;
        state.isPhoneNumber = action.payload;
      })
      .addCase(fetchCheckPhone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.data;
        // Lưu token vào localStorage hoặc nơi khác nếu cần
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      builder
      .addCase(facebookLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(facebookLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.data;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(facebookLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loginUser, logoutUser, phoneNumber } = authSlice.actions;

export default authSlice.reducer;
