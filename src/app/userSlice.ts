import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "./store";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: { payload: User }) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const user = (state: RootState) => state?.user?.user;

export default userSlice.reducer;