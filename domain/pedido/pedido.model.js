var PedidoModel = function () {};

PedidoModel.prototype.solicitar = async function(callback) {
    let message = "Pedido solicitado com sucesso!";
    let json = {
        message: "Pedido solicitado."
    };
    callback(json);
}

PedidoModel.prototype.atualizar = async function(situacao, callback) {
    let json = {
        message: `Situação do pedido atualizado para ${situacao}.`
    };
    callback(json);
}

module.exports = PedidoModel;