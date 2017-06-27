'use strict';

const pedidoModel = require('../domain/pedido/pedido.model');
exports.atualizar = function(args, res, next) {
  /**
   * Atualiza situação do pedido
   * 
   *
   * body Body_1 
   * no response value expected for this operation
   **/
  res.setHeader('Content-Type', 'application/json');
  let model = new pedidoModel
  let situacao = args.body.originalValue.situacao;
  model.atualizar(situacao, (results) => {
    res.end(JSON.stringify(results));
  });
}

exports.solicitar = function(args, res, next) {
  /**
   * Solicita pedido
   * 
   *
   * body Body 
   * no response value expected for this operation
   **/
  let model = new pedidoModel
  res.setHeader('Content-Type', 'application/json');

  model.solicitar((results) => {
    res.end(JSON.stringify(results));
  });
}

