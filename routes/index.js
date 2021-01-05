
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mi primera web en Express' })
};

// Esta ruta va a otra página de la web
exports.sobreNosotros = function(req, res){
  res.render('includes/sobreNos.jade');
};

exports.servicios = function(req, res){
  res.render('includes/servicios.jade');
};

exports.blog = function(req, res){
  res.render('includes/blog.jade');
};

exports.nuestraHistoria = function(req, res){
  res.render('includes/nuestraHistoria.jade');
};

// Envío datos a la vista
  var user = { 
    first_name: 'Barak',
    surname: 'Obama',
    address: 'The White House',
    facebook_friends: '10000000000000'
  };
exports.varLocal = function(req, res){
  res.render('includes/varLocal.jade', { title: 'User', user: user  });
};

exports.ver_mensaje = function (req, res) {
  res.render('includes/ver_mensaje.jade', {datosEnviados: req.body});
};