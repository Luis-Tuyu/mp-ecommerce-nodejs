const mercadopagoCtrl = {};
const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-1159009372558727-072921-8d0b9980c7494985a5abd19fbe921a3d-617633181'
  });


mercadopagoCtrl.createPreference = async (req,res)=>{
    //código de crear preferencia
    
}


module.exports = mercadopagoCtrl;