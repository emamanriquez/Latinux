import React, { useState } from "react";
import img1 from "../../assets/bannerprueba.png";

const Home = () => {
  const [activePage, setActivePage] = useState("inicio");

  return (
    <div className="text-black-900 h-screen">
      <header className="bg-yellow-60 text-black py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-red-500">Comunidad Latinux</h1>
          <nav>
            <a
              href="/"
              className={`ml-4 font-bold ${activePage === "inicio" ? "text-3xl text-white" : "text-xl text-gray-300"
                }`}
              onClick={() => setActivePage("inicio")}
            >
              Inicio
            </a>
            <a
              href="/foros"
              className={`ml-4 font-bold ${activePage === "foro" ? "text-3xl text-white" : "text-xl text-gray-300"
                }`}
              onClick={() => setActivePage("foro")}
            >
              Foros
            </a>
            <a
              href="#"
              className={`ml-4 font-bold ${activePage === "tutoriales" ? "text-3xl text-white" : "text-xl text-gray-300"
                }`}
              onClick={() => setActivePage("tutoriales")}
            >
              Tutoriales
            </a>
            <a
              href="#"
              className={`ml-4 font-bold ${activePage === "contacto" ? "text-3xl text-white" : "text-xl text-gray-300"
                }`}
              onClick={() => setActivePage("contacto")}
            >
              Contacto
            </a>
          </nav>
        </div>

        <div className="flex justify-end mt-9">
          <input
            type="text"
            className="text-white max-w-md px-4 py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Buscar en los foros..."
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Buscar
          </button>
        </div>
      </header>

      <div>
        <img src={img1} alt="banner" />
      </div>

      <div className=" p-6 rounded-lg shadow-2xl max-w-5xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-white-800 mb-4">
          Bienvenidos a nuestra Comunidad de Linux
        </h2>
        <p className="text-white-700 mb-4">
          Somos una comunidad grande y unida de entusiastas y expertos en Linux.
          Este foro ha sido creado con un único propósito: ofrecer ayuda y
          soluciones a los problemas que puedan surgir al usar las distintas
          distribuciones de Linux. No importa si eres principiante o usuario
          avanzado, aquí encontrarás un espacio donde aprender y compartir
          conocimientos es lo más importante.
        </p>
        <p className="text-white-700 mb-4">
          Nuestro objetivo no es obtener beneficios materiales; lo único que
          buscamos es que más personas descubran Linux, comprendan su diversidad
          en distribuciones y aprovechen su increíble funcionalidad. Juntos,
          resolvemos dudas, superamos desafíos técnicos, y promovemos el uso de
          Linux en todas sus formas.
        </p>
        <p className="text-white-700 font-semibold">
          Aquí, la cooperación y el aprendizaje son los pilares que nos guían.
          ¡Únete a nosotros, comparte tu experiencia y aprendamos juntos sobre
          el maravilloso mundo de Linux!
        </p>
      </div>
      <div className="flex justify-center mt-9">
        <a href="/loginuser">
          <button className="px-6 py-1 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Regístrate
          </button>
        </a>
      </div>

      <div class="flex justify-center space-x-6 mt-8">
        {/* <!-- Enlace a Telegram --> */}
        <h2>Nuestras redes sociales!</h2>
        <a
          href="https://t.me/tu_comunidad"
          target="_blank"
          class="text-gray-500 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12.002 0 18.627 5.373 24 12 24s12-5.373 12-11.998C24 5.373 18.628 0 12 0zm5.426 8.227c-.141-.066-.31-.074-.486-.02-1.393.431-9.32 3.883-9.882 4.129-.315.143-.435.229-.435.361.007.084.065.17.179.217.107.048.306.019.587-.078.316-.113 2.547-.889 7.123-2.58.2-.081.383-.033.303.216-.303.96-1.158 3.796-1.401 4.624-.102.341-.219.414-.332.422-.281.02-.51-.191-.791-.378-.45-.302-1.038-.698-1.606-1.086-.428-.292-.86-.39-1.337-.042-.45.332-1.816 1.5-2.472 2.032-.172.142-.343.306-.558.334-.211.028-.52-.048-.799-.14-.573-.194-1.109-.407-1.568-.522-.205-.053-.447-.095-.582-.22-.177-.163-.149-.476-.149-.718 0-1.075.491-4.016.734-5.464.221-1.307.58-2.622.879-3.574.065-.208.122-.412.173-.605.074-.285.045-.486-.092-.556-.122-.063-.288-.002-.459.058-.394.135-1.19.506-1.841.768-.545.213-.967.377-1.274.424-.226.035-.379.02-.505-.07-.147-.108-.237-.288-.263-.522-.048-.451.36-.906.932-1.116 1.589-.573 5.053-1.756 5.715-1.961 2.488-.788 3.584-.936 3.995-.944.084 0 .187.005.279.029.265.066.481.25.557.495.074.238.027.518-.14 1.196z" />
          </svg>
        </a>
        {/* <!-- Enlace a Instagram --> */}
        <a
          href="https://instagram.com/emamanriquez"
          target="_blank"
          class="text-gray-500 hover:text-pink-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.796.249 2.216.415a4.606 4.606 0 011.59.95c.457.457.787.964.95 1.59.167.42.358 1.046.415 2.216.058 1.266.07 1.647.07 4.85 0 3.204-.012 3.584-.07 4.85-.057 1.17-.249 1.796-.415 2.216a4.598 4.598 0 01-.95 1.59c-.457.457-.964.787-1.59.95-.42.167-1.046.358-2.216.415-1.266.058-1.647.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.17-.057-1.796-.249-2.216-.415a4.598 4.598 0 01-1.59-.95c-.457-.457-.787-.964-.95-1.59-.167-.42-.358-1.046-.415-2.216-.058-1.266-.07-1.647-.07-4.85 0-3.204.012-3.584.07-4.85.057-1.17.249-1.796.415-2.216a4.606 4.606 0 01.95-1.59c.457-.457.964-.787 1.59-.95.42-.167 1.046-.358 2.216-.415 1.266-.058 1.647-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.053.073 5.772.13 4.839.323 4.04.654a6.607 6.607 0 00-2.424 1.636 6.607 6.607 0 00-1.636 2.424c-.331.799-.524 1.732-.581 3.013C0 8.332 0 8.741 0 12s.015 3.668.073 4.947c.057 1.281.25 2.214.581 3.013a6.614 6.614 0 001.636 2.424 6.61 6.61 0 002.424 1.636c.799.331 1.732.524 3.013.581C8.332 24 8.741 24 12 24s3.668-.015 4.947-.073c1.281-.057 2.214-.25 3.013-.581a6.6 6.6 0 002.424-1.636 6.6 6.6 0 001.636-2.424c.331-.799.524-1.732.581-3.013.058-1.279.073-1.688.073-4.947s-.015-3.668-.073-4.947c-.057-1.281-.25-2.214-.581-3.013a6.614 6.614 0 00-1.636-2.424 6.614 6.614 0 00-2.424-1.636c-.799-.331-1.732-.524-3.013-.581C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
        </a>
        {/* <!-- Enlace a Facebook --> */}
        <a
          href="https://facebook.com/"
          target="_blank"
          class="text-gray-500 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c-5.471 0-9.837 4.365-9.837 9.837 0 4.946 3.602 9.034 8.308 9.803v-6.916H8.897v-2.7h1.574V9.346c0-1.554.94-2.404 2.367-2.404.688 0 1.41.122 1.41.122v1.553h-.794c-.782 0-1.025.485-1.025 1.037v1.243h2.097l-.335 2.7h-1.762v6.916c4.706-.769 8.308-4.857 8.308-9.803 0-5.472-4.366-9.837-9.837-9.837z" />
          </svg>
        </a>
        {/* <!-- Enlace a WhatsApp --> */}
        <a
          href="https://wa.me/2494513570"
          target="_blank"
          class="text-gray-500 hover:text-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.157.57 4.179 1.567 5.939L.067 24l6.237-1.61A11.964 11.964 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.326 17.306c-.313.876-1.293 1.59-2.128 1.725-.568.09-1.291.158-3.742-.797-3.144-1.228-5.161-4.3-5.32-4.507-.158-.208-1.273-1.695-1.273-3.239s.808-2.295 1.092-2.609c.283-.314.63-.39.841-.39.206 0 .422.002.605.011.198.01.465-.075.727.558.273.648.93 2.06 1.013 2.208.08.146.133.314.027.506-.105.191-.158.311-.307.478-.149.167-.313.372-.446.5-.151.148-.309.31-.134.609.176.3.779 1.283 1.67 2.077 1.147 1.025 2.099 1.344 2.39 1.496.293.15.465.128.641-.078.176-.205.734-.853.931-1.145.199-.293.392-.238.666-.143.275.095 1.738.818 2.038.966.3.149.5.225.575.354.07.13.07.751-.244 1.627z" />
          </svg>
        </a>
      </div>
      <div>
        <footer class=" text-white py-6">
          <div class="container mx-auto text-center">
            <p class="text-sm">© 2024 Latinux. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
