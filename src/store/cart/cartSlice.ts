import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemType } from "../../types/types";

export type CartStateType = {
  cartDropdownHidden: boolean;
  cartItems: ItemType[];
};

const initialState: CartStateType = {
  cartDropdownHidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartDropdownHidden: (state, action: PayloadAction<boolean>) => {
      state.cartDropdownHidden = action.payload;
    },

    addItemToCart: {
      reducer(
        state,
        action: PayloadAction<{ itemToAdd: ItemType; amount?: number }>
      ) {
        const { itemToAdd, amount } = action.payload;

        const itemAmount = amount ? amount : 1;

        const itemAlreadyInCart = state.cartItems.find(
          (item) => item.id === itemToAdd.id
        );

        if (itemAlreadyInCart) {
          const newCartItems = state.cartItems.map((item) =>
            item.id === itemToAdd.id
              ? { ...item, quantity: item.quantity + itemAmount }
              : item
          );

          state.cartItems = newCartItems;
        } else {
          state.cartItems.push({ ...itemToAdd, quantity: itemAmount });
        }
      },
      prepare(itemToAdd: ItemType, amount?: number) {
        return {
          payload: {
            itemToAdd,
            amount,
          },
        };
      },
    },

    deleteItemFromCart: (state, action: PayloadAction<ItemType>) => {
      const itemToDelete = action.payload;

      const newCartItems = state.cartItems.filter(
        (item) => item.id !== itemToDelete.id
      );

      state.cartItems = newCartItems;
    },

    decreaseItemQuantity: (state, action: PayloadAction<ItemType>) => {
      const itemToDecrease = action.payload;

      if (itemToDecrease.quantity > 1) {
        const newCartItems = state.cartItems.map((item) =>
          item.id === itemToDecrease.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        state.cartItems = newCartItems;
      } else {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== itemToDecrease.id
        );
        state.cartItems = newCartItems;
      }
    },
  },
});

export const {
  setCartDropdownHidden,
  addItemToCart,
  deleteItemFromCart,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
