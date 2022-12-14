import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
