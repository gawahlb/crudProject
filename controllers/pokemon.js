const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const result = await mongodb.getDatabase().db('crudProject').collection('pokemon').find();
    result.toArray().then((pokemon) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pokemon);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemonId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('crudProject').collection('pokemon').find({_id: pokemonId});
    result.toArray().then((pokemon) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pokemon[0]);
    });
};

const createMon = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemon = {
        name: req.body.name,
        gen: req.body.gen,
        type1: req.body.type1,
        type2: req.body.type2
    };
    const response = await mongodb.getDatabase().db('crudProject').collection('pokemon').insertOne(pokemon);
    if(response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the Pokemon.');
    }
};

const updateMon = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemonId = new ObjectId(req.params.id);
    const pokemon = {
        name: req.body.name,
        gen: req.body.gen,
        type1: req.body.type1,
        type2: req.body.type2
    };
    const response = await mongodb.getDatabase().db('crudProject').collection('pokemon').replaceOne({_id: pokemonId}, pokemon);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the Pokemon.');
    }
};

const deleteMon = async (req, res) => {
    //#swagger.tags=['Pokemon']
    const pokemonId = new ObjectId(req.params.id);
    
    const response = await mongodb.getDatabase().db('crudProject').collection('pokemon').deleteOne({_id: pokemonId});
    if(response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the Pokemon.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createMon,
    updateMon,
    deleteMon
};