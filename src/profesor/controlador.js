import { Router } from "express";

import ProfesorService from './servicio.js';
const router = Router();

const profesorService = new ProfesorService();

router.get('/', async (req, res) => {
    const profesores = await profesorService.getAll();
    res.json(profesores);
});

router.post ('/', async (req, res) => {
    const profesor = await profesorService.create(req.body);
    res.json(profesor);
});

router.get ('/:id', async (req, res) => {
    const profesor = await profesorService.getById(req.params.id);
    res.json(profesor);
});

router.put ("/:id", async (req, res) => {
    const profesor = await profesorService.update(req.params.id, req.body);
    res.json(profesor);
});

router.delete ('/:id', async (req, res) => {
    const profesor = await profesorService.delete(req.params.id);
    res.json(profesor);
});


export default router;