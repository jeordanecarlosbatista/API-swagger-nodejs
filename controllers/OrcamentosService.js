'use strict';

const orcamentoModel = require('../domain/orcamento/orcamento.model');

exports.aprovar = function(args, res, next) {
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');

  let obj = {
    message: `Pedido: ${args.numero} aprovado com sucesso!`,
    link: {
      url: "http://localhost:8010/api/v1/notificacoes/pedidos/orcamento/aprova",
      descricao: "Notifica que o pedido foi aprovado"
    }
  }

  model.aprovar(obj, (results) => {
    res.end(JSON.stringify(results));
  });
}

exports.rejeitar = function(args, res, next) {
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');

  let obj = {
    message: `Pedido: ${args.numero} foi cancelado com sucesso!`
  }

  model.rejeitar(obj, (results) => {
    res.end(JSON.stringify(results));
  });
}

exports.enviar = function(args, res, next) {
  let model = new orcamentoModel
  res.setHeader('Content-Type', 'application/json');

  let obj = {
    message: `Orçamento: ${args.numero} enviado com sucesso!`,
    link: {
      url: "http://localhost:8010/api/v1/notificacoes/pedidos/orcamento",
      descricao: "Notifica o envio do orçamento."
    }
  }

  model.enviar(obj, (results) => {
    res.end(JSON.stringify(results));
  });
}

