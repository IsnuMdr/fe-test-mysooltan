import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/globals.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "@/state/apiSlice";

export default function App({ Component, pageProps }) {
  return (
    <ApiProvider api={apiSlice}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}
