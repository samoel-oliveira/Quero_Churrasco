var total;

function validaChurras() {
	/*document..reset();*/
	var quant = document.getElementById("quantidade").value;
	total = quant*400;


	var g_linguica = parseInt(document.getElementById("linguica-gramas").value);
	var r_linguica = parseDouble(document.getElementById("linguica-reais").value);
	var contrafile = parseInt(document.getElementById("contrafile").value);
	var picanha = parseInt(document.getElementById("picanha").value);
	var maminha = parseInt(document.getElementById("maminha").value);

	var soma = linguica+contrafile+picanha+maminha;
	document.getElementById("total").innerHTML="O total de carne pedido foi de "+(soma)+" gramas.";

	if((soma<(total-500))||(soma>(total+500))) {

		document.getElementById("alerta").innerHTML="No seu caso a quantidade em gramas a ser escolhida, pode variar de "+(total-500)+" à "+
		(total+500)+", mas o total de carne selecionado foi de "+(soma)+" gramas!";
		document.getElementById("aviso").innerHTML=
		"Por favor caso ainda queira o churrasco, preencha novamente a quantidade em gramas de cada tipo de carne, de forma que o total fique no intervalo estabelecido!";

	}

	else if(total==soma) {

		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((linguica*0.02)+(contrafile*0.028)+(picanha*0.035)+
		(maminha*0.027)).toFixed(2)+".");
		document.getElementById("final").innerHTML="Muito obrigado(a) pela escolha, volte sempre!";

	}

	else if(total!=soma) {

		document.getElementById("resposta").innerHTML="A quantidade ideal de carne para seu churrasco é "+(total)+
		" gramas, mas fique tranquilo(a), a quantidade pedida está dentro do esperado.";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((linguica*0.02)+(contrafile*0.028)+(picanha*0.035)+
		(maminha*0.027)).toFixed(2)+".");
		document.getElementById("final").innerHTML="Muito obrigado(a) pela escolha, volte sempre!";


	}

}