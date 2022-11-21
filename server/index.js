import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import equiposRoutes from "./routes/equipos.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

//El cors se le puede poner al backend y con este no da error de cors al consumir la api si quiero especificar cual url puede consumir la api por seguridad se puede hacer de la siguiente forma esto dentro del cors({ origin: "http://localhost:5173" })
app.use(cors());
app.use(express.json());

app.use(express.static(join(__dirname, "../client/dist")));

app.use(indexRoutes);
app.use(equiposRoutes);

app.listen(PORT);
console.log(`El servidor esta corriendo en el puerto ${PORT}`);
