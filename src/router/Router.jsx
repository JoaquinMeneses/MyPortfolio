import { Routes, Route } from "react-router-dom";
import App from "../App";
import Example from "../pages/Example.jsx";
import FullPageLayout from "../pages/FullPageLayout.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Example />} />
      </Route>
      <Route path="/FullPageLayout" element={<FullPageLayout />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
