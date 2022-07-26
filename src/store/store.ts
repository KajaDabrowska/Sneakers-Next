import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
