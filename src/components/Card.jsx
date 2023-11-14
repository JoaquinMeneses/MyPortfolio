import React from "react";

export default function Card({ text, photo, description, link }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:outline rounded-none">
      <figure className="px-10 pt-10">
        <img src={photo} alt={text} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{text}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary rounded-none"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
