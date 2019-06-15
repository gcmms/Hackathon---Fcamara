function gerarFeed(){
    var sechash = 'puredebatatas';
    var biscoitos = document.cookie.toString();
    console.log(biscoitos);
 

	var request = $.ajax({
	   	url: 'https://fcamratech.herokuapp.com/',
		type: "POST",
		data: {
			'sechash':sechash,
			},
		dataType: 'json',

	  success: function(data) {
	  	if(data['status'] == true) {
	  		var feed = data['feed'];
	  		mostrarFeed(feed);
	  		console.log(feed);
		  } else {
		  	console.log(data);
		  }
	  }
	});

	request.fail(function(jqXHR, textStatus) {
	  alert( "Request failed: " + textStatus );
	});
}

function feedItem(dicty){
	var item =
		[	
			'<div class="row">',
			    '<div class="col s12 m6">',
			      '<div class="card">',
			        '<div class="card-image">',
			         ' <img src="'+dicty['img']+'">',
			          '<span class="card-title"></span>',
			        '</div>',
			        '<div class="card-content">',
			        	'<h6><b>'+dicty['titulo']+'</b></h6>',
			          '<p>'+dicty['descricao']+'</p>',
			        '</div>',
			        '<div class="card-action">',
	          			'<a href="horario.html?'+dicty['id']+'">Ver Mais</a>',
	        		'</div>',
			      '</div>',
			    '</div>',
			'</div>',
			
		];
	return item.join(" ");
}

function mostrarFeed(objeto){
	for(var item in objeto){
		console.log(objeto[item]);
		document.getElementById('vanSelect').innerHTML += itemVan(objeto[item]);
	}
}