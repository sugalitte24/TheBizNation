import { DataTypes } from "sequelize";
import { sequelize } from "../databases/connection.js";
import { Pelicula } from "./pelicula.js";

export const Personaje = sequelize.define('personaje', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    imagen: {
        type: DataTypes.TEXT
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER
    },
    peso: {
        type: DataTypes.INTEGER
    },
    historia: {
        type: DataTypes.TEXT
    }
},
    {
        paranoid: true
    }
)
//Personaje tiene muchas peliculas, peliculas tiene muchos personajes
Personaje.belongsToMany(Pelicula, { through: "personaje_pelicula" })
Pelicula.belongsToMany(Personaje, { through: "personaje_pelicula" })