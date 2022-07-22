import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { orderProduct } from './order.action';

interface AuthState {
  order: IOrder | null;
  cart: CartItem | null
  isLoading: boolean;
  error: string | null;
  successOrder: boolean;
}

const initialState: AuthState = {
  order: null,
  cart: null,
  isLoading: false,
  error: null,
  successOrder: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(orderProduct.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(orderProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.successOrder = true
    })
    builder.addCase(orderProduct.rejected, (state, { payload }:any) => {
      state.isLoading = false
      state.error = payload
    })
  },
});
export const {
} = authSlice.actions;
export default authSlice.reducer;