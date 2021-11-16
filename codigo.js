function guardarUsuario() {
  nom = $('#nombre').val();
  tra = $('#trabajo').val();
  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'POST',
    data: { nombre: nom, trabajo: tra },

    success: function(json) {
      $('#respuestaID').html(json.id).appendTo($('#respuestaID'));
      $('#respuestaNombre').html(json.nombre).appendTo($("#respuestaNombre"));
      $('#respuestaTrabajo').html(json.trabajo).appendTo($('#respuestaTrabajo'));
      $('#respuestaCreado').html(json.createdAt).appendTo($('#respuestaCreado'));
    }

  }).done(function() {
    $("#consola").html("Registro almacenado");
  }).fail(function(textStatus, errorThrown) {
    $("#consola").html("A ocurrido un error: " + textStatus + " " + errorThrown);
  });
}