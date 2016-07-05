$(document).ready(function() {
	
	
		
		
		
        var xhttp=new XMLHttpRequest();
			xhttp.onreadystatechange=function(){
				if(xhttp.readyState==4 && xhttp.status==200){
					var json=JSON.parse(xhttp.responseText);
					
					var tabla=document.getElementById("tabla");
					json.forEach(function(auto){
						//console.log(auto.marca);
					var tr=document.createElement("tr");
					var td1=document.createElement("td");
					var td2=document.createElement("td");
					var td3=document.createElement("td");
					td1.textContent=auto.resultados;
					td2.textContent=auto.codBarras;
					td3.textContent=auto.estado;
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tabla.appendChild(tr);
					}
					);
					
				}
			};
			xhttp.open("GET","assets/json/listaDeResultados.json",true);
			xhttp.send();
			

	})
