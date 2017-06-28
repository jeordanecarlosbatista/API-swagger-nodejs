const PedidoModel = function () {};

PedidoModel.prototype.solicitar = async function(obj, callback) {
    callback(obj);
}

PedidoModel.prototype.atualizarSituacao = async function(obj, callback) {
    callback(obj);
}

PedidoModel.prototype.findSituacaoByPedido = async function(obj, callback) {
    callback(obj);
}

module.exports = PedidoModel;