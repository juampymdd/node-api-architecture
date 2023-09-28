import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../db/connect.js';


class Telefono extends Model {}

Telefono.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Telefono',
    tableName: 'telefonos',
  }
);
console.log(sequelize.models);
//Telefono.belongsTo(sequelize.models.Alumno, { foreignKey: 'ownerId', constraints: false, scope: { ownerType: 'Alumno' } });
//Telefono.belongsTo(sequelize.models.Profesor, { foreignKey: 'ownerId', constraints: false, scope: { ownerType: 'Profesor' } });

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync({ alter: true }).then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar modelos:', error);
});

export default Telefono;
