import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller";
const router = Router()

router.get('/user')
router.post('/user')
router.put('/user/:id')
router.delete('/user/:id')
router.get('/user/:id')

export default router;