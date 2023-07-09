import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";

const RouterApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterApp;
