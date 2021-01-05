
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
  var mensajes = require('./routes/mensajes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', routes.index);
app.post('/', function(req, res){
  res.send(req.body);
});

app.get('/enviar_mensaje', mensajes.get_enviar_mensaje);
app.post('/enviar_mensaje', mensajes.post_enviar_mensaje);

app.get('/enviar_mensaje2', mensajes.get_ver_mensaje);
app.post('/enviar_mensaje2', mensajes.post_ver_mensaje);
app.post('/ver_mensaje', routes.ver_mensaje);

app.get('/index', routes.index);
app.get('/sobreNosotros', routes.sobreNosotros);
app.get('/servicios', routes.servicios); 
app.get('/blog', routes.blog); 
app.get('/nuestraHistoria', routes.nuestraHistoria);
app.get('/varLocal', routes.varLocal);

// app.listen(3000);
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
