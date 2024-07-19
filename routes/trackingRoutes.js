import { Router } from 'express';
import { createTracking, getTracking, getAllTrackings, updateTracking, deleteTracking } from '../controllers/trackingController.js';
import auth from '../middleware/authMiddleware.js';

const router = Router();

router.post('/tracking', auth, createTracking);
router.get('/tracking/:trackingNumber', getTracking);
router.get('/tracking', getAllTrackings);
router.put('/tracking/:trackingNumber', auth, updateTracking);
router.delete('/tracking/:trackingNumber', auth, deleteTracking);

export default router;