import  { DataTypes }  from "sequelize";
import sequelize from "../../../db/connect.js";

const Alumno = sequelize.define('Alumno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: DataTypes.INTEGER,
    unique: true
    },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY, // Tipo de dato para la fecha de nacimiento
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Asegura que cada email sea único en la base de datos
  },
  ocupacion: {
    type: DataTypes.STRING
  },
  observaciones: {
    type: DataTypes.TEXT
  }
});

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync()
  .then(() => {
    console.log('La tabla de Alumnos ha sido creada.');
  })
  .catch((error) => {
    console.error('Error al crear la tabla de Alumnos:', error);
  });

  
export default Alumno;


