import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { url, setHeaders } from "./api";
interface LoginPayload {
   username: string;
   password: string;
 }
 interface AuthState {
   isLoggedIn: boolean;
   logging?: boolean;
   currentUser?: User;
   token: string | null;
   error: string
 }
const initialState: AuthState = {
   isLoggedIn: false,
   logging: false,
   currentUser: undefined,
   token: localStorage.getItem("token"),
   error: "",
}
export const authSlice = createSlice({
   name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    errorFetching(state, action: PayloadAction<string>) {
      state.isLoggedIn = false
      state.error = action.payload
   },
  },
})

export const {
   login,
   loginSuccess,
   loginFailed,
   logout,
   errorFetching,
} = authSlice.actions

export default authSlice.reducer
