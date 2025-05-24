const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.get('/', participanteController.getAllParticipantes);
router.get('/:id', participanteController.getParticipanteById);
router.post('/', participanteController.createParticipante);
router.put('/:id', participanteController.updateParticipante);
router.delete('/:id', participanteController.deleteParticipante);

module.exports = router;
