import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Comunidad Latinux</h1>
          <nav>
            <a href="#" className="text-white hover:text-gray-300 ml-4">
              Inicio
            </a>
            <a href="#" className="text-white hover:text-gray-300 ml-4">
              Foros
            </a>
            <a href="#" className="text-white hover:text-gray-300 ml-4">
              Tutoriales
            </a>
            <a href="#" className="text-white hover:text-gray-300 ml-4">
              Contacto
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Home;
