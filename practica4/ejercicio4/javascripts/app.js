var main = function(){
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=paisajes&format=json&jsoncallback=?";
	//var url = "test.json";
	
	$.getJSON(url, function(respuesta){
		//console.log(respuesta);
		respuesta.items.forEach(function(item){
			var $img=$("<img>");
			$img.attr("src",item.media.m);
			$("main .photos").append($img);//ojo con el espacio
			$img.fadeIn();
		});
		});
}

$(document).ready(main);