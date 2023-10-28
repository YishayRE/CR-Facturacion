import { Router } from 'express';

import { donaciones } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/donaciones
 */

// Obtener los tokens - privado/Admin
router.post('/donacion/', donaciones.obtenerdonacion);

export { router };