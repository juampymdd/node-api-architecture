import Alumno from "./entidades/AlumnoEntity.js";

class AlumnoService {
    constructor() {
        this.alumnoRepository = Alumno;
    }

    async getAll() {
        try {
            return await this.alumnoRepository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
      try{
        return await this.alumnoRepository.findByPk(id);
      }catch(error){
        throw new Error(error);
      }
    }
    
    async create(alumno) {
        return await this.alumnoRepository.create(alumno);
    }
    async update(id, alumno) {
        return await this.alumnoRepository.update(alumno, {
          where: {
            id
          }
        });
    }

    async delete(id) {
        return await this.alumnoRepository.destroy({where: {id}});
    }
}

export default AlumnoService;