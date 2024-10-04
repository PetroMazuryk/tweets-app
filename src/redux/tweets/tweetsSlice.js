import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, updateFollowers } from "./operations";

const initialState = {
  items: [],
  page: 1,
  limit: 3,
  hasMore: true,
  isLoading: false,
  error: null,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
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
      })

      .addCase(updateFollowers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedTweet = action.payload;
        state.items = state.items.map((tweet) =>
          tweet.id === updatedTweet.id ? updatedTweet : tweet
        );
      })
      .addCase(updateFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetTweets } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
