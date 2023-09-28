import { Router } from "express";
import CursoController from "./controlador.js";

const router = Router();

router.use ("/curso", CursoController);

export default router;