// controlador rutas
// importar router
import { Router } from 'express';
//importar el servicio
import AlumnoService from './servicio.js';
const router = Router();

// definir api REST
const alumnoService = new AlumnoService();
// GET
router.get('/', async (req, res) => {
  const alumnos = await alumnoService.getAll();  
  res.json(alumnos);
});

router.post('/', async (req, res) => {
  const alumno = await alumnoService.create(req.body);
  res.json(alumno);
})

export default router;