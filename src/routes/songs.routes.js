import { Router } from "express";
import { createSong, deleteSong, getSongs, updateSong, getSong } from "../controllers/songs.controller.js";
const router = Router()

router.get('/', getSongs)
router.post('/', createSong)
router.put('/:id', updateSong)
router.delete('/:id', deleteSong)
router.get('/:id', getSong)

export default router;