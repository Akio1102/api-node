import { useEquipos } from "../context/EquipoProvider";
import { useNavigate } from "react-router-dom";

function EquipoCard({ equipo }) {
  const { deleteEquipo, toggleEquipoDone } = useEquipos();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleEquipoDone(equipo.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4 mt-6">
      <header className="flex justify-between">
        <h2 className="text-lg font-bold">{equipo.eq1}</h2>
        <p className="text-lg font-bold">VS</p>
        <h2 className="text-lg font-bold">{equipo.eq2}</h2>
        <span>{equipo.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <div className="flex gap-x-2 justify-center mt-2 mb-3">
        <p className="text-md">{equipo.description}</p>
        <p className="text-md">{equipo.createAt}</p>
      </div>
      <div className="flex gap-x-2 justify-center">
        <button
          className="bg-blue-500 px-2 py-1 text-black rounded-md"
          onClick={() => navigate(`/edit/${equipo.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 px-2 py-1 text-black rounded-md"
          onClick={() => deleteEquipo(equipo.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-black rounded-md"
          onClick={() => handleDone(equipo.done)}
        >
          Partido Terminado
        </button>
      </div>
    </div>
  );
}

export default EquipoCard;
