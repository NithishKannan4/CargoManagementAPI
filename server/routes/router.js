const express = require('express')
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/',services.homeRoutes)
route.get('/details',services.detailRoutes)

// API
route.get('/api/users', controller.find);

module.exports = route