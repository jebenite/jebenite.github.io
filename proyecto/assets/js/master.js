$(document).ready(function() {
	

    $.getJSON("assets/json/sucursales.json", function (jsonResp) {
        jsonResp.sucursales.sucursalGuayaquil.forEach(function(item) {
            //tb puede ser asi
            //var $li = $("<li/>").addClass("list-group-item");
            var $li = $('<a href="sucursal.html" class="list-group-item" ></a>')
            $li.text(item.sucursal1);
            $("#guayaquil").append($li)
        });
		jsonResp.sucursales.sucursalQuito.forEach(function(item) {
            var $li = $('<a href="sucursal.html" class="list-group-item"></a>')
            $li.text(item.sucursal2);
            $("#quito").append($li)
        });
		jsonResp.sucursales.sucursalCuenca.forEach(function(item) {
            var $li = $('<a href="sucursal.html" class="list-group-item"></a>')
            $li.text(item.sucursal3);
            $("#cuenca").append($li)

        });
    })

	$("#btn-regist").click(function(event) {
		// alert('msg');
		$("#myModalLogin").modal('hide');
	});
    $("#btn-toggle-login").click(function(event) {
		// alert('msg');
		$("#myModalRegister").modal('hide');
	});

});
