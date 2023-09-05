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
    usuario: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'usuario',
    timestamps: false,
}
);
