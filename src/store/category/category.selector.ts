import { createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootStateType } from "../store";
import { CategoryMapType } from "../../types/types";
import { CategoriesStateType } from "./categoryReducer";

const selectCategoryReducer = (state: RootStateType): CategoriesStateType =>
  state.categories;

export const selectCategoriesArray = createDraftSafeSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesFetchError = createDraftSafeSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.error
);

// we do the mapping here because in the state the data should be the bare, default value
export const selectCategories = createDraftSafeSelector(
  [selectCategoriesArray],
  (categories) =>
    categories?.reduce((acc: CategoryMapType, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
