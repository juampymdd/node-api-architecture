import { Router } from "express";
import AulaController from "./controlador.js";

const router = Router();

router.use("/aula", AulaController);

export default router;