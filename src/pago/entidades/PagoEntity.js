import {DataTypes} from "sequelize";
import sequelize from "../../../db/connect.js";

const Pago = sequelize.define('Pago', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dni: {
        type: DataTypes.INTEGER,
        unique: true
      },
    descripcion: {
      type: DataTypes.TEXT
    }
  });
  
  // Sincronizar el modelo con la base de datos (crear la tabla si no existe)
  sequelize.sync()
    .then(() => {
      console.log('La tabla de Pagos ha sido creada.');
    })
    .catch((error) => {
      console.error('Error al crear la tabla de Pagos:', error);
    });
  
  export default Pago;