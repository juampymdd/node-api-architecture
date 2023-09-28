import Aula from "./entidades/AulaEntity.js";

export class AulaService {
    constructor(){
        this.aulaRepository = Aula;
    }

    async getAll() {
        try {
            const aulas = await this.aulaRepository.findAll();
            return aulas
        } catch (error) {
            throw new Error(error);
        }
    }


    async getById(id) {
        try{
            return await this.aulaRepository.findByPk(id);
        } catch (error){
            throw new Error(error);
        }
    }


    async create(aula) {
        return await this.aulaRepository.create(aula);
    }


    async update(id, aula) {
        return await this.aulaRepository.update(aula, {
            where: {
                id
            }
        });
    }


    async delete(id) {
        return await this.aulaRepository.destroy({where: {id}});
    }

}

export default AulaService;