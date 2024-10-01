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
