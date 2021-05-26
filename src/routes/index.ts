//endpoints de operações 
import { Router } from 'express';
import indexServices from '@routes/services/index';

const router = Router();
router.use(indexServices);

module.exports = router;
export default router;