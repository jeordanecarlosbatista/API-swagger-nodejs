'use strict';

const pedidoModel = require('../../domain/pedido/pedido.model');

exports.solicitar = (args, res, next) => {
  let model = new pedidoModel
  res.setHeader('Content-Type', 'application/json');

  model.solicitar((results) => {
    res.end(results);
  });
}

exports.atualizar = (args, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  let model = new pedidoModel
  let situacao = args.body.originalValue.situacao;
  model.atualizar(situacao, (results) => {
    res.end(results);
  });
}