import React from "react";

//Componentes
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { scrollPage } from "./components/Scroll.jsx";

//Paginas
import Inicio from "./pages/Inicio.jsx";
import Acerca from "./pages/Acerca.jsx";
import Habilidades from "./pages/Habilidades.jsx";
import Experiencia from "./pages/Experiencia.jsx";
import Contacto from "./pages/Contacto.jsx";

// Tipado
type Page = {
  id: string;
  component: React.ComponentType<{ scrollPage: (id: string) => void }>;
};

const App: React.FC = () => {
  const pages: Page[] = [
    { id: "inicio", component: Inicio },
    { id: "acerca", component: Acerca },
    { id: "habilidades", component: Habilidades },
    { id: "experiencia", component: Experiencia },
    { id: "contacto", component: Contacto },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar {...{ scrollPage }} />
      {pages.map((page, index) => (
        <div key={index} id={page.id}>
          <page.component {...{ scrollPage }} />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default App;
