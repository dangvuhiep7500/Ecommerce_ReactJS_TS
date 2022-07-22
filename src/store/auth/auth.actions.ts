import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface propsLogin{
    email:string;
    password: string;
}
interface propsRegister{
    firstName:string;
    lastName:string;
    phoneNumber: number;
    email:string;
    password: string;
}
export const userLogin = createAsyncThunk(
    'users/login',
    async ({ email, password }:propsLogin, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        }
        const { data } = await axios.post(
          'http://localhost:5000/users/login',
          { email, password },
          config
        )
        return data
      } catch (error:any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
export const userRegister = createAsyncThunk(
    'users/register',
    async ({ lastName,firstName,phoneNumber,email, password }:propsRegister, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          'http://localhost:5000/users/register',
          { lastName,firstName,phoneNumber,email, password },
          config
        )
      } catch (error:any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )