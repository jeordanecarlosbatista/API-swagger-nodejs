'use strict';

var url = require('url');

var Pedidos = require('./PedidosService');

module.exports.atualizarSituacao = function atualizar (req, res, next) {
  Pedidos.atualizarSituacao(req, res, next);
};

module.exports.solicitar = function solicitar (req, res, next) {
  Pedidos.solicitar(req.body, res, next);
};

module.exports.findSituacaoByPedido = function findSituacaoByPedido (req, res, next) {
  Pedidos.findSituacaoByPedido(req.swagger.params, res, next);
};

