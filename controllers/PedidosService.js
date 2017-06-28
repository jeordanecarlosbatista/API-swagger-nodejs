'use strict';

const pedidoModel = require('../domain/pedido/pedido.model');

exports.atualizarSituacao = function(args, res, next) {
  res.setHeader('Content-Type', 'application/json');
  let model = new pedidoModel

  let obj = {
    message: `A situação do pedido: ${args.swagger.params.idPedido.value} foi atualizado para o Status: ${args.body.situacao}`,
    link: {
      url: "http://localhost:8010/api/v1/notificacoes/pedidos/situacao",
      descricao: "url para envio de notificação"
    }
  }

  model.atualizarSituacao(obj, (results) => {
    res.end(JSON.stringify(results));
  });
}

exports.solicitar = function(args, res, next) {
  let model = new pedidoModel
  res.setHeader('Content-Type', 'application/json');

  let obj = {
      message: "Pedido solicitado com sucesso!",
      link: {
        url: "http://localhost:8010/api/v1/notificacoes/pedidos/solicitacao",
        descricao: "url para envio de notificação"
      }
  };

  model.solicitar(obj, (results) => {
    res.end(JSON.stringify(results));
  });
}

exports.findSituacaoByPedido = function(args, res, next) {
  let model = new pedidoModel
  res.setHeader('Content-Type', 'application/json');

  let obj = {
      message: `Pedido: ${args.idPedido.value}, situação: Solicitado`,
  };

  model.findSituacaoByPedido(obj, (results) => {
    res.end(JSON.stringify(results));
  });
}

