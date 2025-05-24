const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController');

router.get('/', admController.getAllAdms);
router.get('/:id', admController.getAdmById);
router.post('/', admController.createAdm);
router.put('/:id', admController.updateAdm);
router.delete('/:id', admController.deleteAdm);

module.exports = router;
