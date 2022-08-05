import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../store/store";

import Layout from "../components/layout/layout";

import { AddBtnContextProvider } from "../contexts/add-btn-context";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AddBtnContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AddBtnContextProvider>
    </Provider>
  );
}

export default MyApp;
