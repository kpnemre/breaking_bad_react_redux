import {configureStore} from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";

 export const store = configureStore({
     reducer:{
         chars:characterSlice
     }
 })