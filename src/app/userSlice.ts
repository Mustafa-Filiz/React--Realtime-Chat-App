import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
  refreshToken: string;
}

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: { payload: User | null }) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const user = (state: RootState) => state?.user?.user;

export default userSlice.reducer;