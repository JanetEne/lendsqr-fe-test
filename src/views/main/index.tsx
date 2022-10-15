import React from "react";
import Layout from "components/layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Users from "./users";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default Main;
