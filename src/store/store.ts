import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userSlice";
import categoriesReducer from "./category/categoryReducer";
import cartReducer from "./cart/cartSlice";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user", "cart"],
};

// This is needed, because if we save cartDropdown Next.js will throw a hydration error on reload if the cart dropdown was visible
// That happens because on initial server side render it is hidden, the difference is what causes the error
// I could in theory import CartDropdown component dynamically but I think this is a nice solution
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  blacklist: ["cartDropdownHidden"],
};

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
});

export type RootStateType = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // We do this, because firebase user is non-serializable data (smh)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/setUser", "persist/PERSIST"],
        ignoredPaths: ["user.currentUser"],
      },
      immutableCheck: {
        ignoredPaths: ["user.currentUser"],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatchType = typeof store.dispatch;
