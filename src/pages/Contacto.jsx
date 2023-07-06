import React from "react";

export default function Contacto() {
  return (
    <div className="hero min-h-screen bg-[#293038]" id="acerca">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <p className="mb-5">En desarrollo</p>
          <progress className="progress w-56" value={0} max="100"></progress>
          <progress className="progress w-56" value="10" max="100"></progress>
          <progress className="progress w-56" value="40" max="100"></progress>
          <progress className="progress w-56" value="70" max="100"></progress>
          <progress className="progress w-56" value="100" max="100"></progress>
        </div>
      </div>
    </div>
  );
}
