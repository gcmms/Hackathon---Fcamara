logTestFunction('Conexao importado com sucesso');

function importConexao(arquivo){
	var imported = document.createElement('script');
	imported.src = 'app/conexao/'+arquivo+'.js';
	document.head.appendChild(imported); 
	logTestFunction('Chamando Conexao + '+arquivo);
}

//importConexao('conexaoBack');
importConexao('conexaoBack');
importConexao('entradas');
importConexao('erroConexao');




logTestFunction('=================================================');