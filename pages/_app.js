import "../styles/globals.css";
import Layout from "../components/Layout";

import { useRouter } from "next/router";

import { useEffect } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
 

  useEffect(() => {
    let x = document.getElementById("loader");
    const handleStart = (url) => {
      // console.log(`Loading: ${url}`);

      x.classList.remove("close");
      x.classList.add("loading");
      // console.log(x);
    };

    const handleStop = () => {
      x.classList.add("close");
      x.classList.remove("loading");
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
