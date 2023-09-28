import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../db/connect.js';

class Aula extends Model {}

Aula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Aula',
    tableName: 'aulas',
  }
);

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync()
  .then(() => {
    console.log('La tabla de Aulas ha sido creada.');
  })
  .catch((error) => {
    console.error('Error al crear la tabla de Aulas:', error);
  });

export default Aula;
