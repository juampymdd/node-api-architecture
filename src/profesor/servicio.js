import Telefono from "../telefono/entidades/TelefonoEntity.js";
import Profesor from "./entidades/ProfesorEntity.js";

class ProfesorService {
    constructor() {
        this.profesorRepository = Profesor;
    }

    async getAll() {
        try {
            return await this.profesorRepository.findAll({
              include: [
                {
                    model: Telefono,
                    as: 'telefonos',
                    attributes: ['id', 'numero'],
                },
            ],
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async  getById(id){
        try {
            return await this.profesorRepository.findByPk(id);
        } catch (error) { 
            throw new Error(error);
        }
    }

    async create (profesor) {
        return await this.profesorRepository.create(profesor);
    }

    async update(id, profesor) {
        return await this.profesorRepository.update(profesor, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await this.profesorRepository.destroy({where: {id}});
    }
}


export default ProfesorService;