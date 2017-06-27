'use strict';

var url = require('url');

var Orcamentos = require('./OrcamentosService');

module.exports.aprovar = function aprovar (req, res, next) {
  Orcamentos.aprovar(req.swagger.params, res, next);
};

module.exports.rejeitar = function rejeitar (req, res, next) {
  Orcamentos.rejeitar(req.swagger.params, res, next);
};
