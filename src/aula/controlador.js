import { Router } from "express";
import AulaService from "./servicio.js";
const router = Router();

const aulaService = new AulaService();

router.get("/", async (req, res) => {
    const aulas = await aulaService.getAll();
    res.json(aulas);
});

router.post("/", async (req, res) => {
    const aula = await aulaService.create(req.body);
    res.json(aula);
});

router.get("/:id", async (req, res) => {
    const aula = await aulaService.getById(req.params.id);
    res.json(aula);
});

router.put("/:id", async (req, res) => {
    const aula = await aulaService.update(req.params.id, req.body);
    res.json(aula);
});

router.delete("/:id", async (req, res) => {
    const aula = await aulaService.delete(req.params.id);
    res.json(aula);
});


export default router;