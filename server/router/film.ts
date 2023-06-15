import express from 'express'
import { verifyToken } from '../middleware/auth';
import { getFilms, loadFilmByDay, saveFilm } from '../controllers/movies/moviesControllers';
const router = express.Router()

router.get('/getFilms', verifyToken, getFilms)
router.post('/loadFilmByDay', verifyToken, loadFilmByDay)
router.post('/saveFilm', verifyToken, saveFilm)

module.exports = router