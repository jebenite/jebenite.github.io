/*window.onload=function(){
	init();
}

function init(){
	var btn=document.querySelector(".comment-input button");
	var tecla=document.querySelector(".comment-input input");
	btn.addEventListener("click", agregarComentario);
	tecla.addEventListener("keypress",function(e){
		if(e.keyCode == 13 ){
			agregarComentario()
		}
	})
	
}

function agregarComentario(){
	var txtInput=document.querySelector(".comment-input input");
	if(txtInput.value!=""){
	
	var nuevoComentario = document.createElement("p");
	nuevoComentario.textContent=txtInput.value;
	var comentariosSection=document.querySelector(".comments");
	comentariosSection.appendChild(nuevoComentario);
	txtInput.value="";
	}
}*/
$(document).ready(function(){
	init();
});
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
		var nuevoComentario = $("<p></p>").text(txtInput);
		var comentariosSection = $(".comments").append(nuevoComentario);
		$(".comment-input input").val('');
	}
}





