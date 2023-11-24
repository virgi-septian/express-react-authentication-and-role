import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false, 
  isSuccess: false, 
  isLoading: false,
  message: ""
}

export const authSlice = createAsyncThunk({
  name: "auth",
  initialState,
  reducers:{
    reset: (state) => initialState, 
  }
});