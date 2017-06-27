'use strict';

var url = require('url');

var Pedidos = require('./PedidosService');

module.exports.atualizar = function atualizar (req, res, next) {
  Pedidos.atualizar(req.swagger.params, res, next);
};

module.exports.solicitar = function solicitar (req, res, next) {
  Pedidos.solicitar(req.swagger.params, res, next);
};
