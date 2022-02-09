import express from 'express';

import { createContact, getContacts } from '../controllers/contacts_controller.js';

const router = express.Router();

router.get('/', getContacts )
router.post('/', createContact);

export default router;