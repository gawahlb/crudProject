const express = require('express');
const router = express.Router();

const dinoController = require('../controllers/dinosaurs');

router.get('/', dinoController.getAll);

router.get('/:id', dinoController.getSingle);

router.post('/', dinoController.createDino);

router.put('/:id', dinoController.updateDino);

router.delete('/:id', dinoController.deleteDino);

module.exports = router;