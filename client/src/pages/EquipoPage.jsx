import { useEffect } from "react";
import EquipoCard from "../components/EquipoCard";
import { useEquipos } from "../context/EquipoProvider";

function EquipoPage() {
  const { equipos, loadEquipo } = useEquipos();

  useEffect(() => {
    loadEquipo();
  }, []);

  function renderMain() {
    if (equipos.length === 0)
      return (
        <div className="flex text-white mt-screen mt-10">
          <h1 className="text-3xl">No hay Partidos en la Base de Datos</h1>
        </div>
      );
    return equipos.map((equipo) => (
      <EquipoCard equipo={equipo} key={equipo.id} />
    ));
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bond text-center">Partidos</h1>
      <div className="grid grid-cols-2 gap-3"> {renderMain()}</div>
      <footer></footer>
    </div>
  );
}

export default EquipoPage;
