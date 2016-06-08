
function main(indicador){
	if(indicador=="octocat")
		var url = "https://api.github.com/users/octocat";
	else if(indicador=="jebenite")
		var url = "https://api.github.com/users/jebenite";
	else if(indicador=="coding-horror")
		var url = "https://api.github.com/users/coding-horror";
	else if(indicador=="antirez")
		var url = "https://api.github.com/users/antirez";
	else if(indicador=="mojombo")
		var url = "https://api.github.com/users/mojombo";
	else
		var url = "https://api.github.com/users/presidentobama";
	
	
	$.getJSON(url, function(respuesta){
		
		
			
			$("#imagen").attr("src",respuesta.avatar_url);
			
			
			
			$("#ciudad").text(respuesta.name+"|"+respuesta.location);
			
			
			$("#repos").text(respuesta.public_repos);
			$("#seguidores").text(respuesta.followers);
			
		});
	
	
}

$(document).ready(function(){
	main("octocat");
	
	$("#combobox").change(function() {
		main(this.value);
	
	
});
	
 
	
});