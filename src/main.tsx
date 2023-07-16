import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeProvider from "./providers/ThemeProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountryDetail from "./components/CountryDetail.tsx";

const AppWrapper = () => {
  const client = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
  },
  {
    path: "country/:countryName",
    element: <CountryDetail />
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
