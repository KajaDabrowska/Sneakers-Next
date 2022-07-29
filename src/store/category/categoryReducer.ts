import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import { getCategoriesAndDocuments } from "../../firebase/firebase.utils";

import { CategoryType } from "../../types/types";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await getCategoriesAndDocuments();
    return response;
  }
);

export type CategoriesStateType = {
  categories: CategoryType[];
  isLoading: boolean;
  // if i ever choose to actually use the error I will take care of this messy types
  error: null | Error | unknown;
};

const initialState: CategoriesStateType = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
});

export default categoriesReducer;
