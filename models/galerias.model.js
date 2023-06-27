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
    galodep: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    nomSupv: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    nomResp: {
        type: DataTypes.STRING(35),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'galerias',
    timestamps: false,
}
);
