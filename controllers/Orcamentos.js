'use strict';

var url = require('url');

var Orcamentos = require('./OrcamentosService');

module.exports.aprovar = function aprovar (req, res, next) {
  Orcamentos.aprovar(req.body, res, next);
};

module.exports.rejeitar = function rejeitar (req, res, next) {
  Orcamentos.rejeitar(req.body, res, next);
};

module.exports.enviar = function enviar (req, res, next) {
  Orcamentos.enviar(req.body, res, next);
};
