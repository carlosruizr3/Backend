import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class UserModel extends Model { }
UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    zona: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    tipoUsuario: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'usuarios',
    timestamps: false,
}
);
