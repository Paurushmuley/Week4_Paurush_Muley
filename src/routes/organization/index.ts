import { Router } from 'express';
import { createOrganization, getOrganizations, updateOrganization, deleteOrganization } from '../../controllers/organizationController';

const router = Router();

router.post('/', createOrganization);
router.get('/', getOrganizations);
router.put('/:id', updateOrganization);
router.delete('/:id', deleteOrganization);

export default router;
