import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/axios';

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
  },
});

export const { loginUser, logoutUser, phoneNumber } = authSlice.actions;

export default authSlice.reducer;
