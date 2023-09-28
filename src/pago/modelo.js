import  { Router } from "express";
import PagoController from "./controlador.js";

const router = Router();

router.use("/pago", PagoController);

export default router;