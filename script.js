function calcTotLinha(){
	var qtd = parseFloat(document.getElementById("qtd").value).toFixed(1);
	var vlr = parseFloat(document.getElementById("vlr").value).toFixed(2);
	var totLinha = ((qtd * vlr).toFixed(2));
	document.getElementById("totLinha").value = totLinha;
}

function calcSomaTot(){
	for (let i = 0; i < totLinha.length; i++) {
		var somaTot =+ totLinha[i];
	}
	document.getElementById("somaTot").value = somaTot;
}

function btnIncluir(){
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.textContent = 
}

function gerarId(){
	
}