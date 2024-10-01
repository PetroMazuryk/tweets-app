import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./operations";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    items: [],
    page: 1,
    limit: 3,
    hasMore: true,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetTweets: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length < state.limit) {
          state.hasMore = false;
        }
        state.items = [...state.items, ...action.payload];

        state.page += 1;
      })
      .addCase(fetchTweets.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetTweets } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
