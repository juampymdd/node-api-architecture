import Telefono from "./entidades/TelefonoEntity.js";

export class TelefonoService {
    constructor(){
        this.telefonoRepository = Telefono;
    }

    async getAll() {
      try {
          const telefonos = await this.telefonoRepository.findAll();
          return telefonos
      } catch (error) {
          throw new Error(error);
        }
    }

    async getById(id) {
      try{
          return await this.telefonoRepository.findByPk(id);
      } catch (error){
          throw new Error(error);
      }
    }

    async create(telefono) {

      this.validaFK(telefono);

      return await this.telefonoRepository.create(telefono);
    }

    async update(id, telefono) {
        
      this.validaFK(telefono);

      return await this.telefonoRepository.update(telefono, {
          where: {
              id
          }
      });
    }

    async delete(id) {
        return await this.telefonoRepository.destroy({where: {id}});
    }

    validaFK(telefono){
      if(telefono.alumnoId&&telefono.profesorId){
        throw new Error("El telefono debe pertenecer a un alumno o a un profesor");
      }
    }
}

export default TelefonoService;