import Pago from "./entidades/pagoEntity.js"

export class PagoService {
    constructor(){
        this.pagoRepository = Pago;
    }

    async getAll() {
        try {
            const pagos = await this.pagoRepository.findAll();
            return pagos
        } catch (error) {
            throw new Error(error);
        }
    }


    async getById(id) {
        try{
            return await this.pagoRepository.findByPk(id);
        } catch (error){
            throw new Error(error);
        }
    }


    async create(pago) {
        return await this.pagoRepository.create(pago);
    }


    async update(id, pago) {
        return await this.pagoRepository.update(pago, {
            where: {
                id
            }
        });
    }


    async delete(id) {
        return await this.pagoRepository.destroy({where: {id}});
    }

}

export default PagoService;