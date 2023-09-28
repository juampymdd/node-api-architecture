//controlador de rutas
//importar router
import { Router } from "express";
//importar el servicio
import  TelefonoService  from "./servicio.js";
const router = Router();

//definir api REST
const telefonoService = new TelefonoService();


router.get('/', async (req, res) => {
    const telefonos = await telefonoService.getAll();
    res.json(telefonos);
});

router.post('/', async (req, res)=> {
    const telefono = await telefonoService.create(req.body);
    res.json(telefono);
});

router.get('/:id', async (req, res) =>{
    const telefono = await telefonoService.getById(req.params.id);
    res.json(telefono);
});

router.put('/:id', async (req, res) => {
    const telefono = await telefonoService.update(req.params.id, req.body);
    res.json(telefono);
});

router.delete('/:id', async (req, res) => {
    const telefono = await telefonoService.delete(req.params.id);
    res.json(telefono);
});

export default router;