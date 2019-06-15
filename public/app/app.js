//Console para teste
function logTestFunction(log){
	console.log(log);
}

//Importa arquivos do front
function importFront(arquivo){
	var imported = document.createElement('script');
	imported.src = arquivo;
	document.head.appendChild(imported); 
	logTestFunction('import '+arquivo);
}
//Import URL externa
function importURL(url){
	var imported = document.createElement('script');
	imported.src = url;
	document.head.appendChild(imported); 
	logTestFunction('Chamando Formularios + '+url);
}
//importa arquivos do APP
function importAPP(arquivo){
	var imported = document.createElement('script');
	imported.src = 'app/'+arquivo+'/'+arquivo+'.js';
	document.head.appendChild(imported); 
	logTestFunction('Localizando '+arquivo);
}


importAPP('conexao');
importAPP('cadastrarServico');
importAPP('gerarFeed');
//importAPP('seguranca');
//importAPP('formularios');
//importAPP('componentes');


