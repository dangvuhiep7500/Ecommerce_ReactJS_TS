import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userLogin,userRegister } from './auth.actions';

interface AuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
  successLogin: boolean;
  successRegister: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  successLogin: false,
  successRegister: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.successLogin = false
      state.user = null
      localStorage.removeItem('persist:user') // deletes token from storage
      return state
    },
    clearState: (state) => {
      state.successRegister = false;
      state.isLoading = false;
      state.successLogin = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    //Login
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.successLogin = true
      state.user = payload
    })
    builder.addCase(userLogin.rejected, (state, { payload }:any) => {
      state.isLoading = false
      state.error = payload
    })
    // Register
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.successRegister = true
    })
    builder.addCase(userRegister.rejected, (state, { payload }:any) => {
      state.isLoading = false
      state.error = payload
    })
  },
});
export const {
  logout,
  clearState,
} = authSlice.actions;
export default authSlice.reducer;