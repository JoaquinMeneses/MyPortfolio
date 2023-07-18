import React from "react";
import icon from "../../public/icon.svg";

export default function NavBar({ scrollPage }) {
  const sections = [
    { id: "inicio", label: "inicio" },
    { id: "acerca", label: "acerca de mí" },
    { id: "habilidades", label: "habilidades" },
    { id: "experiencia", label: "experiencia" },
    { id: "contacto", label: "contacto" },
  ];

  return (
    <div className="navbar fixed z-10 flex-col bg-[#1b2127]">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 justify-center">
          {sections.map((section, index) => (
            <li key={index}>
              <p onClick={() => scrollPage(section.id)}>
                <span className="text-[#78DD82]">#</span>
                {section.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
