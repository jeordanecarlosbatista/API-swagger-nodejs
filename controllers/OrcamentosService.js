'use strict';

const orcamentoModel = require('../domain/orcamento/orcamento.model');
exports.aprovar = function(args, res, next) {
  /**
   * Aceita proposta do orçamento
   * 
   *
   * body Body_2 
   * no response value expected for this operation
   **/
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');
  model.aprovar((results) => {
    res.end(JSON.stringify(results));
  });
}

exports.rejeitar = function(args, res, next) {
  /**
   * Rejeita proposta do orçamento
   * 
   *
   * body Body_3 
   * no response value expected for this operation
   **/
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');
  model.rejeitar((results) => {
    res.end(JSON.stringify(results));
  });
}

