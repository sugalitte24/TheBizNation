import { DataTypes } from "sequelize";
import { sequelize } from "../databases/connection.js";

export const Pelicula = sequelize.define('pelicula', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    calificacion: {
        type: DataTypes.INTEGER
    }
},
    {
        paranoid: true
    })
