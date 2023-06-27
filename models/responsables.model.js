import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ResponsablesModel extends Model { }
UsuarioModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomResp: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'responsables',
    timestamps: false,
}
);
