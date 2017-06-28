var OrcamentoModel = function () {};

OrcamentoModel.prototype.aprovar = async function(obj, callback) {
    callback(obj);
}

OrcamentoModel.prototype.rejeitar = async function(obj, callback) {
    callback(obj);
}

OrcamentoModel.prototype.enviar = async function(obj, callback) {
    callback(obj);
}

module.exports = OrcamentoModel;