import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "views/login";
import Main from "views/main";
import UserLayout from "views/main";
import Users from "views/main/users";

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
