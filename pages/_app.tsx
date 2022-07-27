import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../src/utils/firebase/firebase.utils";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { AddBtnContextProvider } from "../src/contexts/add-btn-context";

import { store, persistor } from "../src/store/store";
import { setUser } from "../src/store/user/userSlice";
import { fetchCategories } from "../src/store/category/categoryReducer";

import { AppDispatchType } from "../src/store/store";

import "../styles/global.scss"; // here are the styles

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AddBtnContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AddBtnContextProvider>
      </PersistGate>
    </Provider>
  );
}
