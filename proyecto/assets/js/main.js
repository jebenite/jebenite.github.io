$(document).ready(function() {
    $("#ingresar").click(function(event) {
        window.location = "sucursales.html"
    });
    var $dateYear = $("<p/>").html("&copy; | " + new Date().getFullYear() + " Copyright");
    $("#contactenos .nav-footer").append($dateYear);

    $(".entrar").click(function(event) {
        window.location = "sucursales.html"
    });
	$("#misexamenes").click(function(event) {
        window.location = "misexamenes.html"
    });
	$("#misdatos").click(function(event) {
        window.location = "misdatos.html"
    });
	$("#ingresarMuestra").click(function(event) {
        window.location = "ingresomuestra.html"
    });
	
	$("#listaDeMuestras").click(function(event) {
        window.location = "listaDeResultados.html"
    });
    $('#myModalZoom').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget);
        var modal = $(this)
        var path = "assets/img/"+button.attr("id");
        var img = $("<img id='imgModal'/>").attr("src", path);
        modal.find('.modal-img').empty();
        modal.find('.modal-img').append(img);
    });

});
