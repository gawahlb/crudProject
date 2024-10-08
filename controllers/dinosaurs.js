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

const createDino = async (req, res) => {
    const dinosaur = {
        name: req.body.name,
        period: req.body.period,
        type: req.body.type
    };
    const response = await mongodb.getDatabase().db('crudProject').collection('dinosaurs').insertOne(dinosaur);
    if(response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the dinosaur.');
    }
};

const updateDino = async (req, res) => {
    const dinosaurId = new ObjectId(req.params.id);
    const dinosaur = {
        name: req.body.name,
        period: req.body.period,
        type: req.body.type
    };
    const response = await mongodb.getDatabase().db('crudProject').collection('dinosaurs').replaceOne({_id: dinosaurId}, dinosaur);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the dinosaur.');
    }
};

const deleteDino = async (req, res) => {
    const dinosaurId = new ObjectId(req.params.id);
    
    const response = await mongodb.getDatabase().db('crudProject').collection('dinosaurs').deleteOne({_id: dinosaurId});;
    if(response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the dinosaur.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createDino,
    updateDino,
    deleteDino
};