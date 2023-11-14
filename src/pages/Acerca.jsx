import React from "react";

const photo = "https://i.postimg.cc/cLf2xcWX/Joaquin-Meneses-1.png";
export default function Acerca() {
  return (
    <div className="hero min-h-screen pattern" id="acerca">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col">
        <div className="flex justify-around items-center mb-2">
          <article className="fle x flex-col flex-1 gap-1 p-4 sm:w-[40vw]">
            <h1 className="text-2xl	font-semibold ">
              Desarrollador con una curiosidad innata y una pasión
              por la optimización.
            </h1>
            <p>
              Mi objetivo es simplificar desafíos complejos utilizando mis
              conocimientos del desarrollo backend y frontend. Con una
              trayectoria profesional que incluye experiencia en proyectos
              individuales y trabajo en equipo.¡Siempre estoy buscando nuevas
              oportunidades para aprender y crecer!
            </p>
          </article>
          <figure className="hidden sm:contents">
            <img src={photo} alt="foto de presentación" className="w-[30vw] stylePhoto"/>
          </figure>
        </div>
        <section className="chat chat-end flex flex-col">
          <h1 className="border-primary p-2 bg-primary text-black">
            "Todo debería hacerse lo más simple posible, pero no más simple."
          </h1>
          <h2 className="border-b border-l border-r p-2 justify-end">
            - Albert Einstein
          </h2>
        </section>
      </div>
    </div>
  );
}
