import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
