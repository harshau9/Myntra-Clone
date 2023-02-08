import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
import ThemeContextProvider from "./pages/ThemeContext/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ChakraProvider>
    </BrowserRouter>
  </ThemeContextProvider>
);

reportWebVitals();
