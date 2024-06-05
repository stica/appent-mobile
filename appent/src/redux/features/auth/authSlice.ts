import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import RootState from "../../rootState";
import AuthenticatedUser from "./types/authenticatedUser";

export interface AuthState {
  currentUser: AuthenticatedUser | null;
}

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthenticatedUser | null>) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    }
  }
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.currentUser !== null;
