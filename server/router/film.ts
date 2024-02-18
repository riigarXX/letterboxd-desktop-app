import express from 'express'
import { verifyToken } from '../middleware/auth';
import { getFilms, loadFilmByDay, saveFilm, getFilmsNoViewed } from '../controllers/movies/moviesControllers';
const router = express.Router()

router.get('/films', verifyToken, getFilms)
router.get('/films/:id', verifyToken, loadFilmByDay)
router.post('/saveFilm', verifyToken, saveFilm)
router.get('/films/filmsNoViewed', verifyToken, getFilmsNoViewed)

module.exports = router
