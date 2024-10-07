const express = require('express');
const router = express.Router();

const pokeController = require('../controllers/pokemon');

router.get('/', pokeController.getAll);

router.get('/:id', pokeController.getSingle);

module.exports = router;