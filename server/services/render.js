const axios = require('axios');

// exports.homeRoutes = (req,res) => {
//     res.render("index");
// }

exports.homeRoutes = (req, res) => {
    res.render("index");
}

exports.detailRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/users', { params : { awbno : req.query.awbno }})
        .then(function(response) {
            console.log();
            res.render('details',{users : response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}