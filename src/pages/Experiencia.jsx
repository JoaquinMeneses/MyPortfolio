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
    {
      id: "4",
      text: "MINGA",
      photo:
        "https://i.postimg.cc/WzfJnxVV/Captura-de-pantalla-2023-07-18-150853.png",
      description: "Proyecto grupal desarrollado para aprender el Stack MERN",
      link: "https://minga-orange-front.vercel.app/",
    },
    {
      id: "5",
      text: "Mind Tech",
      photo:
        "https://i.postimg.cc/KvKsSMzG/Captura-de-pantalla-2023-07-18-151437.png",
      description:
        "Proyecto grupal desarrollado para aplicar lo aprendido con el Stack MERN",
      link: "https://mindtech.store/",
    },
  ];

  return (
    <div className="hero min-h-screen star" id="experiencia">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content my-16 ">
        <div className="flex flex-wrap justify-center gap-4">
          {experiences.map((experience, index) => (
            <Card
              key={index}
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
