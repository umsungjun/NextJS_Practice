import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <span>hello</span>
    </div>
  );
}

export default MyApp;
