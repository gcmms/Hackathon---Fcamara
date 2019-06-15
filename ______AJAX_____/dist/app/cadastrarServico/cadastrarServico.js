logTestFunction('Cadastro importado com sucesso');

function cadastrarServico(form) {
    var titulo          = form.titulo.value;
    var horaI           = form.horarioInicio.value;
    var horaF           = form.horarioFinal.value
    var limit           = form.limit.value;
    var descricao       = form.descricao.value;
    
    var url        =  conexao()[0];
	var sechash    =  conexao()[1];
	//localiza o cadastro nas entradas 
	var caminho       =  entradasBack()[1];
	//Autenticar
	var biscoitos     = document.cookie.toString();

	var request = $.ajax({
	    url: url+caminho,
		type: "POST",
		data: {
			'titulo' : titulo , 
			'horaI'  : horaI,
			'horaF'  : horaF,
			'limit'  : limit,
			'descricao' : descricao,
			'sechash' : sechash,
			'cookie'  : biscoitos
		},
		
		dataType: 'json',

	  	success: function(data) {
		  	
	  	window.location.href = "home.html";





	  }
	});

	request.fail(function(jqXHR, textStatus) {
	  alert( "Request failed: " + textStatus );
	  console.log('deu ruim mano adeus vaga kkk');
	});
}

