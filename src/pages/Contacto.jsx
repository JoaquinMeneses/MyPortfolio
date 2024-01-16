import CV from "../../public/Joaquín Meneses-Hoja de vida.pdf";

export default function Contacto() {
  return (
    <div className="hero min-h-screen signal" id="acerca">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content bg-[#293038] rounded-lg">
        <div>
          <div className="grid card rounded-box place-items-center">
            <div className="join join-vertical lg:join-horizontal">
              <a
                href="https://www.linkedin.com/in/joaquín-meneses/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn join-item"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/JoaquinMeneses"
                target="_blank"
                rel="noopener noreferrer"
                className="btn join-item"
              >
                GitHub
              </a>
              <a
                href="mailto:joakinmeneses.jm@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn join-item"
              >
                Correo
              </a>
            </div>
          </div>
          <div className="divider">Descargar</div>
          <div className="grid card rounded-box place-items-center">
            <a
              href={CV}
              download="Joaquin Meneses-Hoja de vida"
              className="btn join-item"
            >
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
