import React from "react";

const LoginUser = () => {
  return (
    <div className="w-full mas-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sn font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sn font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="*********"
            type="password"
          />
          <p className="text-red-500 text-xs italic">
            Por favor escriba su contraseña
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Iniciar Sesion
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700"
            href="#"
          >
            has olvidado tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
