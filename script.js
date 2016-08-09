var total;

function calcQuantPess() {

	var quant = document.getElementById("quantidade").value;
	total = quant*400;
	document.getElementById("resposta").innerHTML="A quantidade de carne para seu churrasco poderá variar de "+(total-500)+
	" a "+(total+500)+" gramas. Para que não haja desperdício nem falta de carne!";

}

function limparForm() {
	
	document.getElementById("pedido").reset();

}

function limparSaida() {

	document.getElementById("resposta").reset();
	/*...*/

}

function validaChurras() {
	/*document..reset();*/

		var g_linguica = parseInt(document.getElementById("linguica-gramas").value);

		var g_contrafile = parseInt(document.getElementById("contrafile-gramas").value);

		var g_picanha = parseInt(document.getElementById("picanha-gramas").value);

		var g_maminha = parseInt(document.getElementById("maminha-gramas").value);

		var g_coracao = parseInt(document.getElementById("coracao-gramas").value);

		var g_cupim = parseInt(document.getElementById("cupim-gramas").value);

		var g_galeto = parseInt(document.getElementById("galeto-gramas").value);

		var g_gratinado = parseInt(document.getElementById("gratinado-gramas").value);

		var g_bisteca = parseInt(document.getElementById("bisteca-gramas").value);

		var g_soma = g_linguica+g_contrafile+g_picanha+g_maminha+g_coracao+g_cupim+g_galeto+g_gratinado+g_bisteca;


		if((g_soma<(total-500))||(g_soma>(total+500))) {

		document.getElementById("total").innerHTML="A quantidade de carne pedida foi de "+(g_soma)+" gramas ("+(((g_soma)/1000).toFixed(2))+" quilos). Essa quantidade está fora do intervalo estabelecido. Por isso haverá desperdício ou falta de carene!";
		document.getElementById("preco").innerHTML=
		"Caso queira pedir outro churrasco, preencha novamente a quantidade de gramas para cada tipo de carne, de forma que o total fique no intervalo estabelecido inicialmente!";

		}

		else if(total==g_soma) {

		document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" gramas ("+(((g_soma)/1000).toFixed(2))+" quilos).";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)).toFixed(2)+".");

		}

		else if(total!=g_soma) {

		document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" gramas ("+(((g_soma)/1000).toFixed(2))+" quilos).";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)).toFixed(2)+".");

	}	

}