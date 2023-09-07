import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class CatactivosModel extends Model { }
GaleriasModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tipoActivo: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    numStock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    anoEquipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numDisparos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tiempRecUso: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'catActivos',
    timestamps: false,
}
);
