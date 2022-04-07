const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({ origin: '*' }));
//routes.use(cors({origin: 'http://localhost:3001'}));

const rastrearRout = require("./RastreioRout");
routes.use("/api", rastrearRout);
module.exports = routes;