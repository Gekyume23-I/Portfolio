import React from "react";
import PortfolioProjectCard from "./PortfolioProjectCard";

const PortfolioProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Página a mi mejor amiga",
      description:
        "Una página web dedicada a mi mejor amiga, con su biografía, fotos y mensajes de amigos.",
      tags: ["React", "TailwindCSS", "Node.js"],
      githubLink: "https://github.com/tuusuario/ecommerce-ropa",
    },
    {
      id: 2,
      name: "App de Tareas",
      description:
        "Aplicación de lista de tareas con funcionalidades de añadir, eliminar y marcar como completado.",
      tags: ["React", "TailwindCSS", "Firebase"],
      githubLink: "https://github.com/Gekyume23-I/gelda.git",
    },
    {
      id: 3,
      name: "Clon de Netflix",
      description:
        "Recreación de la interfaz de usuario de Netflix con React y consumo de API de películas.",
      tags: ["React", "TailwindCSS", "API REST"],
      githubLink: "https://github.com/tuusuario/netflix-clone",
    },
    {
      id: 4,
      name: "Dashboard Financiero",
      description:
        "Panel de control interactivo para visualizar datos financieros con gráficos y tablas.",
      tags: ["React", "TailwindCSS", "D3.js"],
      githubLink: "https://github.com/tuusuario/dashboard-financiero",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortfolioProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;
