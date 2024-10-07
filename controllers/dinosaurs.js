const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('crudProject').collection('dinosaurs').find();
    result.toArray().then((dinosaurs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dinosaurs);
    });
};

const getSingle = async (req, res) => {
    const dinosaursId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('crudProject').collection('dinosaurs').find({_id: dinosaursId});
    result.toArray().then((dinosaurs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dinosaurs[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};