import Alumno from "./entidades/AlumnoEntity.js";

class AlumnoService {
    constructor() {
        this.alumnoRepository = Alumno;
    }

    async getAll() {
        try {
            const alumnos = await this.alumnoRepository.findAll();
            return alumnos
        } catch (error) {
            throw new Error(error);
        }
    }
    async getById(id) {
        return await this.alumnoRepository.getById(id);
    }
    async create(alumno) {
        return await this.alumnoRepository.create(alumno);
    }
    async update(id, alumno) {
        return await this.alumnoRepository.update(id, alumno);
    }
    async delete(id) {
        return await this.alumnoRepository.delete(id);
    }
}

export default AlumnoService;