import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../store/store";

import Layout from "../components/layout/layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
