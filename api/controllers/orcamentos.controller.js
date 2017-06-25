'use strict';

const url = require('url');
const path = require('path');

var orcamento = require('../service/orcamentos.service');

module.exports.aprovar = (req, res, next) => {
  orcamento.aprovar(req.swagger.params, res, next);
};

module.exports.rejeitar = (req, res, next) => {
  orcamento.rejeitar(req.swagger.params, res, next);
};