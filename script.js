var total;

function atualizaTextoLing(valor) {
	    document.getElementById("rangeValueLing").value=valor;
	    document.getElementById("simb-gramasLing").value="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoContr(valor) {
	  	document.getElementById("rangeValueContr").value=valor;
	  	document.getElementById("simb-gramasContr").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
	}

function atualizaTextoPic(valor) {
      document.getElementById("rangeValuePic").value=valor;
      document.getElementById("simb-gramasPic").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoMam(valor) {
      document.getElementById("rangeValueMam").value=valor;
      document.getElementById("simb-gramasMam").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoCora(valor) {
      document.getElementById("rangeValueCora").value=valor;
      document.getElementById("simb-gramasCora").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoCup(valor) {
      document.getElementById("rangeValueCup").value=valor;
      document.getElementById("simb-gramasCup").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoAssa(valor) {
      document.getElementById("rangeValueAssa").value=valor;
      document.getElementById("simb-gramasAssa").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoGrat(valor) {
      document.getElementById("rangeValueGrat").value=valor;
      document.getElementById("simb-gramasGrat").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function atualizaTextoBist(valor) {
      document.getElementById("rangeValueBist").value=valor;
      document.getElementById("simb-gramasBist").innerHTML="g ("+((valor/1000).toFixed(1))+" kg)";
    }

function calcQuantPess() {

	var quant = document.getElementById("quantidade").value;

	if(quant>=1) {
		total = quant*400;
		document.getElementById("resposta").innerHTML="A quantidade de carne para seu churrasco poderá variar de "+(total-300)+
		" g ("+(((total-300)/1000).toFixed(1))+" kg) a "+(total+300)+" g ("+(((total+300)/1000).toFixed(1))+" kg)."+" Para que não haja desperdício nem falta de carne!";
    }

    else {
    	document.getElemnetById("resposta").innerHTML="A quantidade de pessoas para seu churrasco é inváida!"+"\nÉ preciso ao menos de uma pessoa para pedir um churrasco!"
    }
}

function limparForm() {
	
	document.getElementById("pedido").reset();

	document.getElementById("simb-gramasLing").innerHTML="";
	document.getElementById("simb-gramasContr").innerHTML="";
	document.getElementById("simb-gramasPic").innerHTML="";
	document.getElementById("simb-gramasMam").innerHTML="";
	document.getElementById("simb-gramasCora").innerHTML="";
	document.getElementById("simb-gramasCup").innerHTML="";
	document.getElementById("simb-gramasAssa").innerHTML="";
	document.getElementById("simb-gramasGrat").innerHTML="";
	document.getElementById("simb-gramasBist").innerHTML="";

}

function limparCadastro() {

	document.getElementById("cadastro").reset();

}

function limparSaida() {

	document.getElementById("resposta").innerHTML="";
	document.getElementById("total").innerHTML="";
	document.getElementById("promocao").innerHTML="";
	document.getElementById("preco").innerHTML="";

}

/*Inicializando variáveis para puder realizar comparação*/
var nome="";
var sobrenome="";
var dataNasc=-1;
var endereco="";
var telefone=-1;

function cadastroDados() {

	 nome = document.getElementById("nome").value;
	 sobrenome = document.getElementById("sobrenome").value;
	 dataNasc = parseInt(document.getElementById("data").value);
	 endereco = document.getElementById("endereco").value;
	 telefone = parseInt(document.getElementById("telefone").value);


	 if((nome!="")&&(sobrenome!="")&&(dataNasc>-1)&&(endereco!="")&&(telefone>-1)) {
	 	alert("Cliente cadastrado com sucesso!");
	 	window.location.href="pedido.html";
	 }
	 else {
	 	alert("Cliente não foi cadastrado"+"\nNão foram preenchidos todos os campos!");
	 }

}

function validaChurras() {
	/*document..reset();*/

		var g_linguica = parseInt(document.getElementById("linguica-gramas").value);

		var g_contrafile = parseInt(document.getElementById("contrafile-gramas").value);

		var g_picanha = parseInt(document.getElementById("picanha-gramas").value);

		var g_maminha = parseInt(document.getElementById("maminha-gramas").value);

		var g_coracao = parseInt(document.getElementById("coracao-gramas").value);

		var g_cupim = parseInt(document.getElementById("cupim-gramas").value);

		var g_assado = parseInt(document.getElementById("assado-gramas").value);

		var g_gratinado = parseInt(document.getElementById("gratinado-gramas").value);

		var g_bisteca = parseInt(document.getElementById("bisteca-gramas").value);

		var g_soma = g_linguica+g_contrafile+g_picanha+g_maminha+g_coracao+g_cupim+g_assado+g_gratinado+g_bisteca;


		if((g_soma<(total-500))||(g_soma>(total+500))) {

		document.getElementById("total").innerHTML="A quantidade de carne pedida foi de "+(g_soma)+" g ("+(((g_soma)/1000).toFixed(1))+" kg). Essa quantidade está fora do intervalo estabelecido. Por isso haverá desperdício ou falta de carne, o que não é permitido!";
		document.getElementById("preco").innerHTML=
		"Caso queira pedir um churrasco válido, limpe as entradas e preencha novamente a quantidade de pessoas, e de gramas para cada tipo de carne, de forma que o total fique no intervalo estabelecido inicialmente!";

		}

		else if((total==g_soma)&&(nome!="")&&(sobrenome!="")&&(dataNasc>-1)&&(endereco!="")&&(telefone>-1)) {

		document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" g ("+(((g_soma)/1000).toFixed(1))+" kg).";
		document.getElementById("promocao").innerHTML="Você foi agraciado(a) com uma promoção de 20% de desconto, APROVEITE!";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+((((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)+(g_coracao*0.018)+(g_cupim*0.032)+(g_assado*0.022)+(g_gratinado*0.025)+(g_bisteca*0.032))*0.8).toFixed(2)+" .");
		document.getElementById("obrigado").innerHTML="Obrigado(a) pelo pedido, volte sempre!";

		}

		else if((total!=g_soma)&&(nome!="")&&(sobrenome!="")&&(dataNasc>-1)&&(endereco!="")&&(telefone>-1)) {

		document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" g ("+(((g_soma)/1000).toFixed(1))+" kg).";
		document.getElementById("promocao").innerHTML="Você foi agraciado(a) com uma promoção de 20% de desconto, APROVEITE!";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+((((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)+(g_coracao*0.018)+(g_cupim*0.032)+(g_assado*0.022)+(g_gratinado*0.025)+(g_bisteca*0.032))*0.8).toFixed(2)+" .");
		document.getElementById("obrigado").innerHTML="Obrigado(a) pelo pedido, volte sempre!";

		}

		else if(total==g_soma) {

		document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" g ("+(((g_soma)/1000).toFixed(1))+" kg).";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)+(g_coracao*0.018)+(g_cupim*0.032)+(g_assado*0.022)+(g_gratinado*0.025)+(g_bisteca*0.032)).toFixed(2)+" .");
		document.getElementById("obrigado").innerHTML="Obrigado(a) pelo pedido, volte sempre!";

		}

		else if(total!=g_soma) {

		document.getElementById("total").innerHTML="O total de carne pedido foi de "+(g_soma)+" g ("+(((g_soma)/1000).toFixed(1))+" kg).";
		document.getElementById("preco").innerHTML="O preço do seu churrasco foi de R$ "+(((g_linguica*0.02)+(g_contrafile*0.028)+(g_picanha*0.035)+
		(g_maminha*0.027)+(g_coracao*0.018)+(g_cupim*0.032)+(g_assado*0.022)+(g_gratinado*0.025)+(g_bisteca*0.032)).toFixed(2)+" .");
		document.getElementById("obrigado").innerHTML="Obrigado(a) pelo pedido, volte sempre!";

	}	

}

/*
function Login() {
  var done=0;
  var usuario = document.getElementsByName("usuario")[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName("senha")[0].value;
  seha=senha.toLowerCase();
  if (usuario=="admin" && senha=="admin") {
    alert("Logado(a) com sucesso!");
    done=1;
  }
  if (done==0) { alert("Dados incorretos, tente novamente"); }
}
*/