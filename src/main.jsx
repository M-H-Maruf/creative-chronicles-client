import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </ChakraProvider>
);
