const {Router} = require('express');
const router = Router();
const {createPreference} = require('../controller/mercadopago.controller')

//createPreference
router.post("/api/payment/mercadopago/createpreference",createPreference);


module.exports = router;