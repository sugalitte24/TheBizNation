import express from "express";
import personajeRoutes from './routes/personaje.routes.js';
import peliculaRoutes from './routes/pelicula.routes.js';
import generoRoutes from './routes/genero.routes.js';
import authRoutes from './routes/auth.routes.js';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express'
const app = express()

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Test TheBizNation NodeJs",
            version: "1.0.0"
        },
        servers: [
            {
                url: "localhost:3000"
            }
        ]
    },
    apis: ['./routes/auth.routes.js']
}

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))

app.use(personajeRoutes)
app.use(peliculaRoutes)
app.use(generoRoutes)
app.use(authRoutes)
export default app;