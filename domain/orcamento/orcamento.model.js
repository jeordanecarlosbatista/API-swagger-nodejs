var OrcamentoModel = function () {};

OrcamentoModel.prototype.aprovar = async function(callback) {
    let json = {
        message: "Orçamento aprovado."
    };
    callback(json);
}

OrcamentoModel.prototype.rejeitar = async function(callback) {
    let json = {
        message: "Orçamento rejeitado."
    };
    callback(json);
}

module.exports = OrcamentoModel;