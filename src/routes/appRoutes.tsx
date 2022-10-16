import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "views/login";
import Main from "views/main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="app/*" element={<Main />} />
      <Route path="/" element={<Navigate replace to="/app" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
