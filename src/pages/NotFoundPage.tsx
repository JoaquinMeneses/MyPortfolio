import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#191e24] min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center">
        <img
          src="https://i.postimg.cc/tgyKVZzW/peepo.png"
          alt="Peepo"
          className="p-4 hidden sm:block"
        />
        <img
          src="https://i.postimg.cc/nhFHyhsF/peepo-mobile.png"
          alt="Peepo"
          className="p-4 block sm:hidden"
        />
        <h1 className="text-6xl lg:text-8xl text-[#dc2828] font-bold">404</h1>
      </div>
      <p className="p-4 text-center">
        Esta página no está disponible en este momento o no existe
      </p>
      <Link to="/" className="btn btn-outline btn-error">Volver al inicio</Link>
    </div>
  );
};

export default NotFoundPage;
