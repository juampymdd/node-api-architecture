import { Router } from "express";
import ProfesorController from "./controlador.js";

const router = Router();

router.use("/profesor", ProfesorController);

export default router;

