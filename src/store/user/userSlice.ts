import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserDataType } from "../../utils/firebase/firebase.utils";

export type UserStateType = {
  currentUser: UserDataType | null;
};

const initialState: UserStateType = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDataType | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
