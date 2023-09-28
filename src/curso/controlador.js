import { Router } from "express";

import CursoService from "./servicio.js";
const router = Router();

const cursoService = new CursoService();

router.get('/', async (req, res) => {
    const cursos = await cursoService.getAll();
    res.json(cursos);
});

router.post("/", async (req, res) => {
    const curso = await cursoService.create(req.body);
    res.json(curso);
});

router.get("/:id", async (req, res) => {
    const curso = await cursoService.getById(req.params.id);
    res.json(curso);
});

router.put("/:id", async (req, res) => {
    const curso = await cursoService.update(req.params.id, req.body);
    res.json(curso);
});


router.delete("/:id", async (req, res) => {
    const curso = await cursoService. delete(req.params.id);
    res.json(curso);
});

export default router;

