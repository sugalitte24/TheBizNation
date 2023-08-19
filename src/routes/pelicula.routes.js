import { Router } from "express";
import { createPelicula, getPeliculaById, getPeliculas, updatePelicula, deletePelicula } from "../controllers/pelicula.controller.js";
const router = Router()

router.get('/movies', getPeliculas)
router.get('/movies/:id', getPeliculaById)
router.post('/movies', createPelicula)
router.patch('/movies/:id', updatePelicula)
router.delete('/movies/:id', deletePelicula)


export default router