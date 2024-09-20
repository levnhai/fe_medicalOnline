import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/axios';

export const getAllNew = createAsyncThunk('news/getAllNews', async () => {
  try {
    const response = await axios.get('/news');
    console.log('check response', response)
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const newSlice = createSlice({
  name: 'news',
  initialState: {
    newData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get all news
    builder
      .addCase(getAllNew.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllNew.fulfilled, (state, action) => {
        state.loading = false;
        state.newData = action.payload;
      })
      .addCase(getAllNew.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newSlice.reducer;
