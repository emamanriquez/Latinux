import React, { useState } from "react";

const LoginUser = () => {
  const USERNAME = "admin";
  const PASSWORD = "123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pase por aca");
    if (username === USERNAME && PASSWORD === password) {
      setLogin(true);
      console.log("yendo a la home");
      setError("");
    } else {
      setError("Usuario o contraseña incorrecta");
      setLogin(false);
      console.log(setError);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <button className="">Regresar</button>
      <div></div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sn font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-orange-500 text-white font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
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
