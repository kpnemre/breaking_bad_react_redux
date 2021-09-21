import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const base_url = process.env.REACT_APP_API_URL;
console.log(base_url);
// fetch action yazıldı
export const fetchCharacters = createAsyncThunk('characters/getCharacters',
async ( )=>{
    const res = await axios(`${base_url}/characters?limit=10`)
    // console.log("data:",res.data);
    return res.data;

})
export const characterSlice = createSlice({
    name:'characters',
    initialState:{
items:[],
isLoading:false,

    },
    reducers:{

    },
    extraReducers:{
[fetchCharacters.fulfilled]:(state, action)=>{
// console.log("action.payload", action.payload);
state.items=action.payload;
state.isLoading=false;
},
[fetchCharacters.pending]:(state,action)=>{
state.isLoading=true;
},
// [fetchCharacters.rejected]:(state,action)=>{
//     state.error=action.error.message
//     },

    },
})

export default characterSlice.reducer;
// export const {todoekle, todoyapıldı,todotemizle}= characterSlice.actions;