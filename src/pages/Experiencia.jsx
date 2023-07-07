import React from "react";
import Card from "../components/Card";

export default function Experiencia() {
  const experiences = [
    {
      id: "1",
      text: "Olympus Gym",
      photo:
        "https://i.postimg.cc/FHvfZ830/Captura-de-pantalla-2023-07-07-184425.png",
      description:
        "Primer proyecto individual desarrollado para aprender HTML y CSS",
      link: "https://olympus-gym.netlify.app/",
    },
    {
      id: "2",
      text: "Amazing Events",
      photo:
        "https://i.postimg.cc/sXJy3HvC/Captura-de-pantalla-2023-07-07-185626.png",
      description:
        "Proyecto individual desarrollado para aprender HTML, CSS y Javascript",
      link: "https://joaquin-meneses-amazing-events.netlify.app/",
    },
    {
      id: "3",
      text: "Huella Sana",
      photo:
        "https://i.postimg.cc/0jr4hVSf/Captura-de-pantalla-2023-07-07-185941.png",
      description:
        "Proyecto grupal desarrollado para aprender HTML, CSS, Boostrap y Javascript",
      link: "https://pet-shop-challenge.netlify.app/",
    },
  ];

  return (
    <div className="hero min-h-screen star" id="experiencia">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="grid grid-cols-3 gap-4 my-12">
          {experiences.map((experience) => (
            <Card
              text={experience.text}
              photo={experience.photo}
              description={experience.description}
              link={experience.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
