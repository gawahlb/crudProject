const express = require('express');
const router = express.Router();

const pokeController = require('../controllers/pokemon');

const {isAuthenticated} = require("../middleware/authenticate");

router.get('/', pokeController.getAll);

router.get('/:id', pokeController.getSingle);

router.post('/', isAuthenticated, pokeController.createMon);

router.put('/:id', isAuthenticated, pokeController.updateMon);

router.delete('/:id', isAuthenticated, pokeController.deleteMon);

module.exports = router;