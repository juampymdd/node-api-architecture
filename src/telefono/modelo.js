import  { Router } from "express";
import TelefonoController from "./controlador.js";

const router = Router();

router.use("/telefono", TelefonoController);

export default router;