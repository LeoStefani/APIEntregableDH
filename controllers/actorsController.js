const db = require('../database/models');
const cors = require("cors")


module.exports = {

    getAll: function(req, res) {

        db.Actor.findAll()
        .then(function(result){
            return res.status(200).json(result)
        })
        .catch(function (error){

            res.status(500).send(error)
        })
    },
    getById: function(req, res) {

        db.Actor.findByPk(req.params.id)
        .then(function(result){
            return res.status(200).json(result)
        })
        .catch(function (error){

            res.status(500).send(error)
        })
    },
    create: function(req, res) {

        db.Actor.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            rating:req.body.rating,
            favorite_movie_id:req.body.favorite_movie_id
            
        })
        .then(function(result){
            return res.status(201).json(result)
        })
        .catch(function (error){

            res.status(500).send(error)
        })
    }



}