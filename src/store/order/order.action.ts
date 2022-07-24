import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface propsOrder{
    userId: string;
    products: {
      product: IProduct;
      quantity: number;
    }[];
    totalQuantity: number;
    totalSum: number;
    customer: string;
    email: string;
    phoneNumber: number;
    note: string;
    parentId: string;
    address: string;
    status: string;
}
export const orderProduct = createAsyncThunk(
    'order/checkout',
    async ({ userId,products,customer,email, phoneNumber,note,parentId,address,status,totalQuantity, totalSum }:propsOrder, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          'http://localhost:5000/order/create',
          { userId,products,customer,email, phoneNumber,note,parentId,address,status,totalQuantity, totalSum },
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