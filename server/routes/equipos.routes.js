import { Router } from "express";
import {
  getEquipos,
  getEquipo,
  createEquipos,
  updateEquipo,
  deleteEquipo,
} from "../controllers/equipos.controllers.js";

const router = Router();

router.get("/equipos", getEquipos);

router.get("/equipos/:id", getEquipo);

router.post("/equipos", createEquipos);

router.put("/equipos/:id", updateEquipo);

router.delete("/equipos/:id", deleteEquipo);

export default router;
