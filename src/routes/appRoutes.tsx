import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "views/login";
import Users from "views/users/users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
