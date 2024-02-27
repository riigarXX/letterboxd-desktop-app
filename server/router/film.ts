import express from 'express'
import { verifyToken } from '../middleware/auth';
import { getFilms, loadFilmByDay, saveFilm, getFilmsNoViewed } from '../controllers/movies/moviesControllers';
const router = express.Router()

router.get('/films', verifyToken, getFilms)
router.get('/films/:id', verifyToken, loadFilmByDay)
router.post('/films', verifyToken, saveFilm)
router.get('/filmsNoViewed', verifyToken, getFilmsNoViewed)
module.exports = router
