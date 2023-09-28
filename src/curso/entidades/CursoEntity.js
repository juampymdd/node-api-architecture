import {DataTypes} from "sequelize";
import sequelize from "../../../db/connect.js";

const Curso = sequelize.define('Curso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dni: {
        type: DataTypes.INTEGER,
        unique: true
      },
    observaciones: {
      type: DataTypes.TEXT
    }
  });
  
  // Sincronizar el modelo con la base de datos (crear la tabla si no existe)
  sequelize.sync()
    .then(() => {
      console.log('La tabla de Cursos ha sido creada.');
    })
    .catch((error) => {
      console.error('Error al crear la tabla de Cursos:', error);
    });
  
  export default Curso;