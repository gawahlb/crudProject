const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
});

router.use('/pokemon', require('./pokemon'));

router.use('/dinosaurs', require('./dinosaurs'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) {return next(err); }
        res.redirect('/');
    });
});

module.exports = router;