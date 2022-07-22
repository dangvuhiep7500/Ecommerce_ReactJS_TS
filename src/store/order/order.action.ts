import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface propsOrder{
    userId: string;
    products: {
        productId: string;
        quantity: number;
    };
    custormer: string;
    email: string;
    phoneNumber: number;
    note: string;
    parentId: string;
    address: string;
    status: string;
}
export const orderProduct = createAsyncThunk(
    'order/checkout',
    async ({ userId,products,custormer,email, phoneNumber,note,parentId,address,status }:propsOrder, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          'http://localhost:5000/order/create',
          { userId,products,custormer,email, phoneNumber,note,parentId,address,status },
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