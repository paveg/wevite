import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { worker } from '../mocks/browser';

import App from "./App";

if (import.meta.env.DEV) {
  worker.start()
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <ReactQueryDevtools initialIsOpen={false}/>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
