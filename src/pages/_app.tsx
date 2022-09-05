import Head from "next/head";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../store/store";

import Layout from "../components/layout/layout";

import { AddBtnContextProvider } from "../contexts/add-btn-context";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/*TODO FAVICON  */}

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff6700" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <title>Sneakers</title>
      </Head>
      <Provider store={store}>
        <AddBtnContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AddBtnContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
