const mercadopagoCtrl = {};
const mercadopago = require('mercadopago')
mercadopagoCtrl.createPreference =  (req, res) => {
  //código de crear preferencia
  /* console.log(req.body); */
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
  };

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({id:response.body.id})
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = mercadopagoCtrl;
