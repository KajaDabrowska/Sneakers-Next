import { createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootStateType } from "../store";
import { UserStateType } from "./userSlice";

export const selectUserSlice = (state: RootStateType): UserStateType =>
  state.user;

export const selectCurrentUser = createDraftSafeSelector(
  selectUserSlice,
  (user) => user.currentUser
);
