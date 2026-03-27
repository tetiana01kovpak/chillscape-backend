import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getAllLocations,
  createLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
} from '../controllers/locationController.js';
import {
  getAllLocationsSchema,
  createLocationSchema,
  locationIdParamSchema,
  updateLocationSchema,
} from '../validations/locationValidation.js';

const router = Router();


router.get('/', celebrate(getAllLocationsSchema), getAllLocations);


router.get('/:locationId', celebrate(locationIdParamSchema), getLocationById);

router.post('/', authenticate, celebrate(createLocationSchema), createLocation);


router.patch('/:locationId', authenticate, celebrate(updateLocationSchema), updateLocation);


router.delete('/:locationId', authenticate, celebrate(locationIdParamSchema), deleteLocation);

export default router;
