var tareas = ["Ir al supermercado","Llevar el auto a mantenimiento","Preparar la clase de Daw","Responder correos","Pasear al perro","Terminar la practica de Daw"];
var flagAn=true;
var flagRe=true;

function init(){
	$(".comment-input button").click(agregarComentario);
	$(".comment-input input").keypress(function(e){
		if(e.keyCode == 13)
			agregarComentario(); 
	});
}

function agregarComentario(){
	var txtInput = $(".comment-input input").val();
	if( txtInput != ""){
		var tareaRe = $("<li></li>").text(txtInput);
		var tareaAn = $("<li></li>").text(txtInput);
		$("#listaRe ").prepend(tareaRe);
		$("#listaAn ").append(tareaAn);
		$(".comment-input input").val('');
	}
}

function mostrarAn(arreglo){
	for(var i = 0; i < arreglo.length; i++){
		var txtInput = arreglo[i];
		if( txtInput != ""){
			var nuevoComentario = $("<li></li>").text(txtInput);
			if(flagAn==true){
				$("#listaRe").hide();
				var comentariosSection = $("#listaAn ").append(nuevoComentario);
				$("#listaAn").show();
			}
		}
	}
	flagAn=false;
}

function mostrarRe(arreglo){
	for(var i = 0; i < arreglo.length; i++){
		var txtInput = arreglo[i];
		if( txtInput != ""){
			var nuevoComentario = $("<li></li>").text(txtInput);
			if(flagRe==true){
				$("#listaAn").hide();
				var comentariosSection = $("#listaRe").prepend(nuevoComentario);
				$("#listaRe").show();
			}
		}
	}
	flagRe=false;
}
$(document).ready(function(){
	interTabs();
	$("#nuevaTarea").hide();
	mostrarAn(tareas);
	mostrarRe(tareas);	
	init(); 
});
function interTabs(){   
	$("#tabRe").click(function(){
		$("#tabRe span").addClass("active");
		$("#tabAn span").removeClass("active");
		$("#tabNue span").removeClass("active");
		$("#listaAn").hide();
		$("#listaRe").show();
		$("#nuevaTarea").hide();
	});
	$("#tabAn").click(function(){
		$("#tabRe span").removeClass("active");
		$("#tabAn span").addClass("active");
		$("#tabNue span").removeClass("active");
		$("#nuevaTarea").hide();
		$("#listaRe").hide();
		$("#listaAn").show();
	});
	$("#tabNue").click(function(){
		$("#tabRe span").removeClass("active");
		$("#tabAn span").removeClass("active");
		$("#tabNue span").addClass("active");
		$("#nuevaTarea").show();
		$("#listaRe").hide();
		$("#listaAn").hide();
	});
}