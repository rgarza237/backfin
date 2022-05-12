import { Router } from "express";
import { createSinger, deleteSinger, getSingers, updateSinger, getSinger } from "../controllers/singer.controller.js";
const router = Router()

router.get('/', getSingers)
router.post('/', createSinger)
router.put('/:id', updateSinger)
router.delete('/:id', deleteSinger)
router.get('/:id', getSinger)

export default router;