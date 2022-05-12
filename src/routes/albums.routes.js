import { Router } from "express";
import { createAlbum, deleteAlbum, getAlbums, updateAlbum, getAlbum } from "../controllers/album.controller.js";
const router = Router()

router.get('/', getAlbums)
router.post('/', createAlbum)
router.put('/:id', updateAlbum)
router.delete('/:id', deleteAlbum)
router.get('/:id', getAlbum)

export default router;