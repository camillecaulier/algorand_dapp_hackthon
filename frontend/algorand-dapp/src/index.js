import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/adminPage";
import OwnerPage from "./pages/ownerPage";
import CustomerPage from "./pages/customerPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //browserRouter is for connecting the url
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/owner" element={<OwnerPage />} />
      <Route path="/customer" element={<CustomerPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
