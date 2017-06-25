'use strict';

const url = require('url');
const path = require('path');

var pedido = require('../service/pedidos.service');

module.exports.solicitar = (req, res, next) => {
  pedido.solicitar(req.swagger.params, res, next);
};

module.exports.atualizar = (req, res, next) => {
  pedido.atualizar(req.swagger.params, res, next);
};