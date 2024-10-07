const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('crudProject').collection('pokemon').find();
    result.toArray().then((pokemon) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pokemon);
    });
};

const getSingle = async (req, res) => {
    const pokemonId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('crudProject').collection('pokemon').find({_id: pokemonId});
    result.toArray().then((pokemon) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pokemon[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};