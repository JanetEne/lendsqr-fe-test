import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "views/login";
import Main from "views/main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Main />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
