import React from 'react';

const PortfolioHeader = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Proyectos', page: 'projects' },
    { name: 'Sobre Mí', page: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          Mi Portafolio
        </div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className={`text-lg font-medium transition-colors ${
                currentPage === item.page
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default PortfolioHeader;