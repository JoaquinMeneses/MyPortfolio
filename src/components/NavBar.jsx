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
    <div className="navbar fixed z-10">
      <div className="flex-1">
        <a
          onClick={() => scrollPage("inicio")}
          className="btn btn-ghost normal-case text-xl flex items-center"
        >
          <img src={icon} alt="icon" className="h-8" />
          <p>Joaquín Meneses</p>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {sections.map((section, index) => (
            <li key={index}>
              <a onClick={() => scrollPage(section.id)}>
                <span className="text-[#78DD82]">#</span>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
