import { Router } from "express";
import { login, createUser } from "../controllers/auth.controller.js";
const router = Router()

router.post('/auth/login', login)
router.post('/auth/register', createUser)


export default router