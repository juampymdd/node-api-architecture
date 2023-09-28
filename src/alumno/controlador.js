//controlador de rutas
//importar router
import { Router } from "express";
//importar el servicio
import  AlumnoService  from "./servicio.js";
const router = Router();

//definir api REST
const alumnoService = new AlumnoService();


router.get('/', async (req, res) => {
    const alumnos = await alumnoService.getAll();
    res.json(alumnos);
});

router.post('/', async (req, res)=> {
    const alumno = await alumnoService.create(req.body);
    res.json(alumno);
});

router.get('/:id', async (req, res) =>{
    const alumno = await alumnoService.getById(req.params.id);
    res.json(alumno);
});

router.put('/:id', async (req, res) => {
    const alumno = await alumnoService.update(req.params.id. req.body);
    res.json(alumno);
});

router.delete('/:id', async (req, res) => {
    const alumno = await alumnoService.delete(req.params.id);
    res.json(alumno);
});

export default router;