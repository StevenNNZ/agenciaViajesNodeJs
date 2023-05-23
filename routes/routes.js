import express from "express";
import {
    paginaDetalleViaje,
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes
} from "../controllers/paginasControllers.js";

import { guardarTestimonial } from "../controllers/testimonialController.js"

const routes = express.Router();

routes.get('/', paginaInicio)

routes.get('/nosotros', paginaNosotros)

routes.get('/viajes', paginaViajes)

routes.get('/viajes/:slug', paginaDetalleViaje)

routes.get('/testimoniales', paginaTestimoniales)
routes.post('/testimoniales', guardarTestimonial)

export default routes;