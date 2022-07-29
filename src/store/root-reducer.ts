import { combineReducers } from "redux";

import userReducer from "./user/userSlice";
import categoriesReducer from "./category/categoryReducer";
import cartReducer from "./cart/cartSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
