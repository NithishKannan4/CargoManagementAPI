var Userdb = require('../model/model');

exports.find = (req, res)=> {
    if(req.query.awbno) {
        const id = req.query.awbno;
        Userdb.find({awbno : id})
        .then(data => {
            if(!data)
            res.status(404).send({ message : "Not found user with id "+ id})
            else
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving user with id " + id})
        })
    }
    else {
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
    }
}