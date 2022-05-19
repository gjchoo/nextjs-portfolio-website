import "../styles/globals.scss";
import React from "react";
import type { AppProps } from "next/app";

import PreLoader from "../components/preloader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(!loading), 3200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading && <Component {...pageProps} />}
      <PreLoader />
    </>
  );
}

export default MyApp;
