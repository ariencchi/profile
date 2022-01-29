$(document).ready(function() {
 });

 $("#btnIncluir").one("click", function(){
	insereTotal();
 });
 
 $("#btnIncluir").on("click", function(){
	insereLinha();
 });

 $("#tbody").on("click", ".btnDel", function(){
	 $(this).closest('tr').remove()
	 //$(this).parent().parent().remove();
	 // https://pt.stackoverflow.com/questions/327368/jquery-como-remover-linha-da-tabela-criada-dinamicamente
 });

function insereLinha(){
var tbody = $("#tbody");
var contador = 0;
var linha = "<tr id='linha'>" +
				"<td>"+
					"<th scope='row'><button type='button' class='btn btn-danger btnDel'>X</button></th>"+
				"</td>"+
				"<td>"+
					"<select class='form-select'>"+
						"<option selected>Selecionar</option>"+
						"<option value='1'>Hospedagem</option>"+
						"<option value='2'>Combustível</option>"+
						"<option value='3'>Pedágio</option>"+
						"<option value='4'>Alimentação</option>"+
						"<option value='5'>Outro</option>"+
					"</select>"+
				"</td>"+
				"<td>"+
					"<input class='form-control' type='text' placeholder='Descrição'>"+
				"</td>"+
				"<td>"+
					"<input class='form-control' type='number' step='0.01' min=0 placeholder='R$1,00' id='vlr'>"+
				"</td>"+
				"<td>"+
					"<input class='form-control' type='number' step='1.00' min=0 laceholder='1' id='qtd'>"+
				"</td>"+
				"<td>"+
					"<input class='form-control' type='text' placeholder='Total' id='totLinha' disabled readonly>"+
				"</td>"+
			"</tr>"
			tbody.append(linha);
			contador++;
}

function insereTotal(){
	var tfoot = $("#tfoot");
	var linhaFoot = "<tr>"+
						"<td>Soma Total: </td>"+
						"<td>"+
							"<input class='form-control' type='text' placeholder='Total' id='somaTot' disabled readonly>"+
						"</td>"+
					"</tr>"
	tfoot.append(linhaFoot);
}

// function calcTotLinha(){
// 	var qtd = parseFloat($("#qtd").value).toFixed(2);
// 	var vlr = parseFloat($("#qtd").value).toFixed(2);
// 	var totLinha = ((qtd * vlr).toFixed(2));
// 	$("#totLinha").val(totLinha);
// 	function calcSomaTot(){
// 		for (let i = 0; i < totLinha.length; i++) {
// 			var somaTot =+ totLinha[i];
// 		}
// 		$("#somaTot").val(somaTot);
// 	};
// };
