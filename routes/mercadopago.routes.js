const {Router} = require('express');
const router = Router();
const {createPreference} = require('../controller/mercadopago.controller')

//createPreference
router.post("/api/payment/mercadopago/create_preference",createPreference);




module.exports = router;