import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_API_URL;
const char_limit = 12;
// console.log(base_url);
// fetch action yazıldı
export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (newpage) => {
    // const res = await axios(`${base_url}/characters?limit=10`)
    const res = await axios(
      `${base_url}/characters?limit=${char_limit}&offset=${char_limit * newpage}`
    );

    return res.data;
  }
);
export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    // isLoading: false,
    status:'idle',
    newpage: 0,
    nextpage:true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      // console.log("action.payload", action.payload);
      state.items = [...state.items, ...action.payload];
      state.newpage += 1;
      // state.isLoading = false;
      state.status='succeeded';
      if(action.payload<12){
state.nextpage=false
      }
    },
    [fetchCharacters.pending]: (state, action) => {
      // state.isLoading = true;
      state.status='loading';
    },
    [fetchCharacters.rejected]: (state, action) => {
      // state.isLoading = false;
      state.status='failed';
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
// export const {todoekle, todoyapıldı,todotemizle}= characterSlice.actions;
