import express from "express";
import personajeRoutes from './routes/personaje.routes.js';
import peliculaRoutes from './routes/pelicula.routes.js';
import generoRoutes from './routes/genero.routes.js';
import authRoutes from './routes/auth.routes.js';
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(personajeRoutes)
app.use(peliculaRoutes)
app.use(generoRoutes)
app.use(authRoutes)
export default app;