import axios from "axios";

export const getEquiposRequest = async () =>
  await axios.get("http://localhost:4000/equipos");

export const getEquipoRequest = async (id) =>
  await axios.get(`http://localhost:4000/equipos/${id}`);

export const createEquiposRequest = async (equipo) =>
  await axios.post("http://localhost:4000/equipos", equipo);

export const updateEquipoRequest = async (id, newEquipo) =>
  await axios.put(`http://localhost:4000/equipos/${id}`, newEquipo);

export const deleteEquipoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/equipos/${id}`);

export const toggleEquipoRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/equipos/${id}`, { done });
