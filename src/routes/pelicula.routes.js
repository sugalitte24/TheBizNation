import { Router } from "express";
import { createPelicula, getPeliculaById, getPeliculas, updatePelicula, deletePelicula } from "../controllers/pelicula.controller.js";
import multer from "multer";
const storage = multer.memoryStorage(); // Almacenamiento en memoria
const upload = multer({ storage: storage });

const router = Router()

router.get('/movies', getPeliculas)
router.get('/movies/:id', getPeliculaById)
router.post('/movies', upload.single('image'), createPelicula)
router.patch('/movies/:id', updatePelicula)
router.delete('/movies/:id', deletePelicula)


export default router