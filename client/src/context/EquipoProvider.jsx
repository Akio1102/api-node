import { useContext, useState } from "react";
import {
  getEquiposRequest,
  getEquipoRequest,
  createEquiposRequest,
  updateEquipoRequest,
  deleteEquipoRequest,
  toggleEquipoRequest,
} from "../api/equipo.api";
import { EquipoContext } from "./EquipoContext";

export const useEquipos = () => {
  const context = useContext(EquipoContext);
  if (!context) {
    throw new Error(
      "El hook useEquipos deberia estar dentro de EquipoContextProvider"
    );
  }
  return context;
};

export const EquipoContextProvider = ({ children }) => {
  const [equipos, setEquipos] = useState([]);

  async function loadEquipo() {
    const response = await getEquiposRequest();
    setEquipos(response.data);
    // console.log(response.data);
  }

  const getEquipo = async (id) => {
    try {
      const response = await getEquipoRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createEquipo = async (equipo) => {
    try {
      await createEquiposRequest(equipo);
      // setEquipos([...equipos, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEquipo = async (id, newEquipo) => {
    try {
      const response = await updateEquipoRequest(id, newEquipo);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEquipo = async (id) => {
    try {
      const response = await deleteEquipoRequest(id);
      setEquipos(equipos.filter((equipo) => equipo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleEquipoDone = async (id) => {
    try {
      const equipoFound = equipos.find((equipo) => equipo.id === id);
      await toggleEquipoRequest(id, equipoFound.done === 0 ? true : false);
      setEquipos(
        equipos.map((equipo) =>
          equipo.id === id ? { ...equipo, done: !equipo.done } : equipo
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EquipoContext.Provider
      value={{
        equipos,
        loadEquipo,
        getEquipo,
        createEquipo,
        updateEquipo,
        deleteEquipo,
        toggleEquipoDone,
      }}
    >
      {children}
    </EquipoContext.Provider>
  );
};
