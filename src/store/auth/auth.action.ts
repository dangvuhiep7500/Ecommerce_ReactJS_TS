import { AppDispatch } from "../index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, loginSuccess, errorFetching } from "./auth.slice";
import axios from "axios";
import { url, setHeaders } from "./api";

// export const loginUser = createAsyncThunk(
//   "users/login",
//   async ({email:any, password:any}, { rejectWithValue }) => {
//     try {
//       const token = await axios.post(`${url}/login`, 
//       { IUser });
//       localStorage.setItem("token", token.data);
//       return token.data;
//     } catch (error:any) {
//       console.log(error.response);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
