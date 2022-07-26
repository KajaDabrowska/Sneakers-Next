import { createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootStateType } from "../root-reducer";
import { CartStateType } from "./cartSlice";

const selectCartReducer = (state: RootStateType): CartStateType => state.cart;

export const selectCartItems = createDraftSafeSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createDraftSafeSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createDraftSafeSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price.current,
      0
    )
);

export const selectCartDropdownHidden = createDraftSafeSelector(
  [selectCartReducer],
  (cart) => cart.cartDropdownHidden
);
