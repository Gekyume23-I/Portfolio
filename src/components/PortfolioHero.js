import React from "react";

const PortfolioHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          ¡Hola, soy <span className="text-blue-600">Mario</span>!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Desarrollador web con pasión por crear experiencias digitales
          increíbles. Explora mis proyectos y descubre lo que puedo hacer.
        </p>
        <button className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
          Ver Proyectos
        </button>
      </div>
    </section>
  );
};

export default PortfolioHero;
