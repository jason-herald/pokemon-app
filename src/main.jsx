// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductListingPage from "./components/ProductListingPage";
import ProductDescriptionPage from "./components/ProductDescriptionPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<ProductListingPage />} />
      <Route
        path="/pokemon/:pokemonName"
        element={<ProductDescriptionPage />}
      />
    </Routes>
  </Router>
);
