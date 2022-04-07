const { rastrearEncomendas } = require('correios-brasil');

module.exports = {
  rastrear: async (req, res) => {
    let codRastreio = [req.body.codigo];
    rastrearEncomendas(codRastreio).then((response) => {
      if (response.erro) {
        res.status(400).send({
          message: response.erro
        });
      } else {
        res.status(200).send({
          message: response
        });
      }
    });
  }
}