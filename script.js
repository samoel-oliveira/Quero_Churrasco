var total;

function validaChurras() {
	/*document..reset();*/
	var quant = document.getElementById("quantidade").value;
	total = quant*400;


	var g_linguica = parseInt(document.getElementById("linguica-gramas").value);
	var r_linguica = parseFloat(document.getElementById("linguica-reais").value);

	var g_contrafile = parseInt(document.getElementById("contrafile-gramas").value);
	var r_contrafile = parseFloat(document.getElementById("contrafile-reais").value);

	var g_picanha = parseInt(document.getElementById("picanha-gramas").value);
	var r_picanha = parseFloat(document.getElementById("picanha-reais").value);

	var g_maminha = parseInt(document.getElementById("maminha-gramas").value);
	var r_maminha = parseFloat(document.getElementById("maminha-reais").value);

	var g_soma = g_linguica+g_contrafile+g_picanha+g_maminha;
	var r_soma = r_linguica+r_contrafile+r_picanha+r_maminha;

	document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" gramas.";

	if((g_soma<(total-500))||(g_soma>(total+500))) {

		document.getElementById("alerta").innerHTML="No seu caso a quantidade em gramas a ser escolhida, pode variar de "+(total-500)+" à "+
		(total+500)+", mas o total de carne selecionado foi de "+(g_soma)+" gramas!";
		document.getElementById("aviso").innerHTML=
		"Por favor caso ainda queira o churrasco, preencha novamente a quantidade em gramas de cada tipo de carne, de forma que o total fique no intervalo estabelecido!";

	}

	else if(total==g_soma) {

		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)).toFixed(2)+".");
		document.getElementById("final").innerHTML="Muito obrigado(a) pela escolha, volte sempre!";

	}

	else if(total!=g_soma) {

		document.getElementById("resposta").innerHTML="A quantidade ideal de carne para seu churrasco é "+(total)+
		" gramas, mas fique tranquilo(a), a quantidade pedida está dentro do esperado.";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)).toFixed(2)+".");
		document.getElementById("final").innerHTML="Muito obrigado(a) pela escolha, volte sempre!";


	}

}