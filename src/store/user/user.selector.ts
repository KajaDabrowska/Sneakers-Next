import { createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootStateType } from "../root-reducer";
import { UserStateType } from "./userSlice";

export const selectUserSlice = (state: RootStateType): UserStateType =>
  state.user;

export const selectCurrentUser = createDraftSafeSelector(
  selectUserSlice,
  (user) => user.currentUser
);
