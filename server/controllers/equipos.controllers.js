import { pool } from "../db.js";

export const getEquipos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM equipos ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};

export const getEquipo = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM equipos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ mensaje: "Equipo no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};

export const createEquipos = async (req, res) => {
  try {
    const { eq1, eq2, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO equipos(eq1, eq2, description) VALUES (?,?,?)",
      [eq1, eq2, description]
    );
    res.json({
      id: result.insertId,
      eq1,
      eq2,
      description,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};

export const updateEquipo = async (req, res) => {
  try {
    const { eq1, eq2, description } = req.body;
    const [result] = await pool.query("UPDATE equipos SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};

export const deleteEquipo = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM equipos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Equipo no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};
