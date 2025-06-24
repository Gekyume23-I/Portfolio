import React, { useState } from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioHero from './components/PortfolioHero';
import PortfolioProjects from './components/PortfolioProjects';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PortfolioHero />;
      case 'projects':
        return <PortfolioProjects />;
      case 'about':
        return (
          <section className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Mí</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy un desarrollador web apasionado por crear soluciones innovadoras y eficientes.
                Con experiencia en React y TailwindCSS, me encanta transformar ideas en interfaces de usuario
                intuitivas y visualmente atractivas. Siempre estoy aprendiendo nuevas tecnologías y buscando
                desafíos que me permitan crecer profesionalmente.
              </p>
            </div>
          </section>
        );
      default:
        return <PortfolioHero />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <PortfolioHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20"> {/* Padding top para compensar el header fijo */}
        {renderPage()}
      </main>
    </div>
  );
}

export default App;

// DONE