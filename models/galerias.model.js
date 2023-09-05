import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class GaleriasModel extends Model { }
GaleriasModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomGal: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    zona: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    gerenteZona: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    jefeGal: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'galerias',
    timestamps: false,
}
);
