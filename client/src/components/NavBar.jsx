import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>Organizador de Partidos de Futbol Uts</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to={"/"} className="bg-sky-300 px-2 py-1 rounded-md">
            Inicio
          </Link>
        </li>
        <li>
          <Link to={"/new"} className="bg-amber-300 px-2 py-1 rounded-md">
            Crear Partidos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
