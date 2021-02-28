var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000


var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

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