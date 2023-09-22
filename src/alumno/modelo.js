import { Router } from "express";
import AlumnoController from "./controlador.js";

const router = Router();

router.use("/alumno", AlumnoController);

export default router;
