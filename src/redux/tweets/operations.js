import { apiInstance } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTweets = createAsyncThunk(
  "tweets/fetchTweets",
  async ({ page = 1, limit = 3 }, { rejectWithValue }) => {
    try {
      const response = await apiInstance.get(
        `/tweets?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  "tweets/updateFollowers",
  async ({ tweetId, isFollowed }, { rejectWithValue }) => {
    try {
      const response = await apiInstance.put(`/tweets/${tweetId}`, {
        isFollowed: !isFollowed,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
