import "../styles/global.scss"; // here are the styles

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
