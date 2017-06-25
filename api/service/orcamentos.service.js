'use strict';

const orcamentoModel = require('../../domain/orcamento/orcamento.model');

exports.aprovar = (args, res, next) => {
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');

  model.aprovar((results) => {
    res.end(results);
  });
}

exports.rejeitar = (args, res, next) => {
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');

  model.rejeitar((results) => {
    res.end(results);
  });
}