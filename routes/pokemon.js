const express = require('express');
const router = express.Router();

const pokeController = require('../controllers/pokemon');

router.get('/', pokeController.getAll);

router.get('/:id', pokeController.getSingle);

router.post('/', pokeController.createMon);

router.put('/:id', pokeController.updateMon);

router.delete('/:id', pokeController.deleteMon);

module.exports = router;