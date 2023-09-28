// models/Profesor.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../db/connect.js';
import Telefono from '../../telefono/entidades/TelefonoEntity.js'; // Importa Telefono después de configurar Profesor

class Profesor extends Model {}

Profesor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Profesor',
    tableName: 'profesores',
  }
);

Profesor.hasMany(sequelize.models.Telefono, { as: 'telefonos', foreignKey: 'profesorId', onDelete: 'CASCADE' });

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync()
  .then(() => {
    console.log('La tabla de Profesores ha sido creada.');
  })
  .catch((error) => {
    console.error('Error al crear la tabla de Profesores:', error);
  });

export default Profesor;
