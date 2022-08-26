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
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    birth: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'perfil',
    timestamps: false,
}
);
