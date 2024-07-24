import React from "react";

const LoginUser = () => {
  return (
    <div className="w-full max-w-xs">
      <button className="">Regresar</button>
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
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-orange-500 text-white font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Iniciar Sesion
          </button>
        </div>
        <div className="flex items-center justify-center m-7">
          <a className="font-bold text-sm text-green-500" href="#">
            Perdiste la contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
