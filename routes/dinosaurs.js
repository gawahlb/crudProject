const express = require('express');
const router = express.Router();

const dinoController = require('../controllers/dinosaurs');

const {isAuthenticated} = require("../middleware/authenticate")

router.get('/', dinoController.getAll);

router.get('/:id', dinoController.getSingle);

router.post('/', isAuthenticated, dinoController.createDino);

router.put('/:id', isAuthenticated, dinoController.updateDino);

router.delete('/:id', isAuthenticated, dinoController.deleteDino);

module.exports = router;