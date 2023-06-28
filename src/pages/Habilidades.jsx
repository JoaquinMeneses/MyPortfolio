import React from "react";

export default function Habilidades() {
  return (
    <div className="hero min-h-screen bubbles" id="habilidades">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content items-start">
        <div>
          <p className="text-2xl	font-semibold border px-2 ">Lenguajes</p>
          <div className="border px-2 cursor-default">
            <p className="hover:font-bold hover:text-primary">Javascript</p>
          </div>
        </div>
        <div>
          <p className="text-2xl	font-semibold border px-2 ">Frontend</p>
          <div className="border px-2 cursor-default">
            <p className="hover:font-bold hover:text-primary">HTML</p>
            <p className="hover:font-bold hover:text-primary">CSS</p>
            <p className="hover:font-bold hover:text-primary">React</p>
          </div>
        </div>
        <div>
          <p className="text-2xl	font-semibold border px-2 ">Backend</p>
          <div className="border px-2 cursor-default">
            <p className="hover:font-bold hover:text-primary">Mongo</p>
            <p className="hover:font-bold hover:text-primary">Node.js</p>
          </div>
        </div>
        <div>
          <p className="text-2xl	font-semibold border px-2 ">Herramientas</p>
          <div className="border px-2 cursor-default">
            <p className="hover:font-bold hover:text-info">Metodologia AGILE</p>
            <p className="hover:font-bold hover:text-info">
              GitHub colaborativo
            </p>
            <p className="hover:font-bold hover:text-info">GIT</p>
            <p className="hover:font-bold hover:text-info">Zustand</p>
            <p className="hover:font-bold hover:text-info">Redux</p>
            <p className="hover:font-bold hover:text-info">Bootstrap</p>
            <p className="hover:font-bold hover:text-info">Tailwind</p>
            <p className="hover:font-bold hover:text-info">Mongoose</p>
            <p className="hover:font-bold hover:text-info">Postman</p>
            <p className="hover:font-bold hover:text-info">Atlassian</p>
            <p className="hover:font-bold hover:text-info">Trello</p>
          </div>
        </div>
        <div>
          <p className="text-2xl	font-semibold border px-2 ">En aprendizaje</p>
          <div className="border px-2 cursor-default">
            <p className="hover:font-bold hover:text-warning">Astro</p>
            <p className="hover:font-bold hover:text-warning">SQL</p>
            <p className="hover:font-bold hover:text-warning">React Query</p>
          </div>
        </div>
      </div>
    </div>
  );
}
