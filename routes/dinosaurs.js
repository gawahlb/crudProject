const express = require('express');
const router = express.Router();

const dinoController = require('../controllers/dinosaurs');

router.get('/', dinoController.getAll);

router.get('/:id', dinoController.getSingle);

module.exports = router;