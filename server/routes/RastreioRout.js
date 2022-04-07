const express = require('express');
const routes = express.Router();
const rastreio = require('../controller/RastreioCont');

routes.route('/rastreio').get(rastreio.rastrear);

module.exports = routes;