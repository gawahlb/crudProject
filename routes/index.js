const router = require('express').Router();

router.get('/', (req, res) => {res.send('Enjoy these databases whose topics were selected by my children.')});

router.use('/pokemon', require('./pokemon'));

router.use('/dinosaurs', require('./dinosaurs'));

module.exports = router;