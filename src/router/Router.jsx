import { Routes, Route } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
