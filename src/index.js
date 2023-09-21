import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from "./components/Context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </ChakraProvider>
);
reportWebVitals();
