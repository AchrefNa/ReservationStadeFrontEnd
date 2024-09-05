import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/storeconfig";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthProvider from "./store/Auth-Contexe";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { theme } from './Theme';
import { ChakraProvider } from '@chakra-ui/react'
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  
  <Provider store={store} >
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthProvider>
    </ChakraProvider>
  </Provider>
  
);

// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
