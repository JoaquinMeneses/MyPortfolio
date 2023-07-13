import React from "react";

const lenguajes = [{ lenguaje: "Javascript" }];
const frontend = [
  { tecnologia: "HTML" },
  { tecnologia: "CSS" },
  { tecnologia: "React" },
];
const backend = [{ tecnologia: "Mongo" }, { tecnologia: "Node.js" }];
const herramientas = [
  { tecnologia: "Metodología AGILE" },
  { tecnologia: "GitHub colaborativo" },
  { tecnologia: "GIT" },
  { tecnologia: "Zustand" },
  { tecnologia: "Redux" },
  { tecnologia: "Bootstrap" },
  { tecnologia: "Tailwind" },
  { tecnologia: "Mongoose" },
  { tecnologia: "Postman" },
  { tecnologia: "Atlassian" },
  { tecnologia: "Trello" },
];
const aprendizaje = [
  { tecnologia: "Astro" },
  { tecnologia: "SQL" },
  { tecnologia: "React Query" },
];

export default function Habilidades() {
  return (
    <div className="hero min-h-screen bubbles" id="habilidades">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content items-start flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-2xl font-semibold border px-2">Lenguajes</p>
          {lenguajes.map((l, index) => (
            <div className="border-l border-r px-2 cursor-default" key={index}>
              <p className="hover:font-bold hover:text-primary">{l.lenguaje}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-2xl font-semibold border px-2">Frontend</p>
          {frontend.map((f, index) => (
            <div className="border-l border-r px-2 cursor-default" key={index}>
              <p className="hover:font-bold hover:text-primary">
                {f.tecnologia}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-2xl font-semibold border px-2">Backend</p>
          {backend.map((b, index) => (
            <div className="border-l border-r px-2 cursor-default" key={index}>
              <p className="hover:font-bold hover:text-primary">
                {b.tecnologia}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-2xl font-semibold border px-2">Herramientas</p>
          {herramientas.map((h, index) => (
            <div className="border-l border-r px-2 cursor-default" key={index}>
              <p className="hover:font-bold hover:text-info">{h.tecnologia}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-2xl font-semibold border px-2">En aprendizaje</p>
          {aprendizaje.map((ap, index) => (
            <div className="border-l border-r px-2 cursor-default" key={index}>
              <p className="hover:font-bold hover:text-warning">
                {ap.tecnologia}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
