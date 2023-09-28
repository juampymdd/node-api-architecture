import Curso from "./entidades/cursoEntity.js";

export class CursoService {
    constructor(){
        this.cursoRepository = Curso;
    }

    async getAll(){
        try {
            const cursos = await this.cursoRepository.findAll();
            return cursos
        } catch (error) { 
            throw new Error(error);
        }
    }

    async getById(id){
        try {
            return await this.cursoRepository.findByPk(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(curso) {
        return await this.cursoRepository.create(curso);
    }

    async update(id, curso){
        return await this.cursoRepository.update(curso, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await this.cursoRepository.destroy({where: {id}})
    }

}



export default CursoService;