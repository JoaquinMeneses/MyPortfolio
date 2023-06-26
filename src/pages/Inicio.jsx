import React from "react";

export default function Inicio({ scrollPage }) {
  return (
    <div className="hero min-h-screen topography" id="inicio">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold text-[#78DD82]">
            Hola! Soy Joa
          </h1>
          <button
            className="btn btn-outline btn-primary rounded-none"
            onClick={() => scrollPage("acerca")}
          >
            Acerca de mí
          </button>
        </div>
      </div>
    </div>
  );
}
