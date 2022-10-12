import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/appRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
