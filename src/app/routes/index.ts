import express from 'express'


import { MovieRoutes } from '../../modules/movies/movie.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/movie',
    route: MovieRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router