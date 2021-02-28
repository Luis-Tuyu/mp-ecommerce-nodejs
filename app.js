var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000
var app = express();
const mercadopago = require("mercadopago");
const bodyParser = require('body-parser');

mercadopago.configure({
    access_token:
      "APP_USR-1159009372558727-072921-8d0b9980c7494985a5abd19fbe921a3d-617633181",
  });
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
app.use(express.static('utils'));
 
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/utils', express.static(__dirname + '/utils'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//add routes mercadopago
app.use(require('./routes/mercadopago.routes'))
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

app.listen(port,()=>{
    console.log(`APP is running in port ${port}` )
});