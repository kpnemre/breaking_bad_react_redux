import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const characterSlice = createSlice({
    name:'chars',
    initialState:{
items:[],
    },
    reducers:{

    }
})

export default characterSlice.reducer;
// export const {todoekle, todoyapıldı,todotemizle}= characterSlice.actions;