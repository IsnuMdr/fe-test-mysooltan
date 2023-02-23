import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/globals.css";
import "nprogress/nprogress.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "@/state/apiSlice";
import Router from "next/router";
import nProgress from "nprogress";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      nProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      nProgress.done(false);
    });
  }, []);

  return (
    <ApiProvider api={apiSlice}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}
