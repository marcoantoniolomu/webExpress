
/* En primer lugar creamos una variable que será la que guarde todos los mensajes enviados */
var lista = new Array();
/* Función que nos cargará una vista con un formulario y le pasará la lista de todos los mensajes enviados:  */
function enviar_mensaje(req, res){
   res.render('includes/enviar_mensaje', {
      lista: lista
   });
}

exports.get_enviar_mensaje = function(req, res){
   enviar_mensaje(req, res);
}

/* Así recibimos las variables de tipo POST */
exports.post_enviar_mensaje = function(req, res){
   var asunto = req.body.asunto;
   var mensaje = req.body.mensaje;
   lista.push({
      asunto: asunto,
      mensaje: mensaje
   })
   enviar_mensaje(req, res);
}

// Función para mostrar vista con el contenido del formulario
function enviar_mensaje2(req, res){
   res.render('includes/enviar_mensaje2', {
      lista: lista
   });
}

// GET de la vista del CONTENIDO enviado por formulario
exports.get_ver_mensaje = function(req, res){
   enviar_mensaje2(req, res);
}
/* Así recibimos las variables de tipo POST y las tratamos */
exports.post_ver_mensaje = function(req, res){
   var asunto = req.body.asunto;
   var mensaje = req.body.mensaje;
   lista.push({
      asunto: asunto,
      mensaje: mensaje
   })
   enviar_mensaje2(req, res);
}
