import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface propsOrder{
    userId: string;
    products: {
      product: IProduct;
      quantity: number;
    }[];
    customer: string;
    email: string;
    phoneNumber: number;
    address: string;
    customerReceiver: string;
    phoneReceiver: number;
    addressReceiver: string;
    totalQuantity: number;
    totalSum: number;
    note: string;
    status: string;
    payment: string;

}
export const orderProduct = createAsyncThunk(
    'order/checkout',
    async ({ userId,products,customer,email, phoneNumber,note,address,status,totalQuantity, totalSum,customerReceiver, phoneReceiver, addressReceiver,payment }:propsOrder, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          'https://node-api-ecommerce.vercel.app/order/create',
          { userId,products,customer,email, phoneNumber,note,address,status,totalQuantity, totalSum,customerReceiver, phoneReceiver, addressReceiver,payment },
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