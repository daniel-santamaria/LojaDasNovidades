const cepInput = document.getElementById('cep');
const logradouro = document.getElementById('logradouro');
const numero = document.getElementById('numero');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');

const cnpjInput = document.getElementById('cnpj');
const razaoSocial = document.getElementById('razaoSocial')


window.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
});

cepInput.addEventListener('blur', consultarCep);
cepInput.addEventListener('keydown', apagaEndereco);

cnpjInput.addEventListener('blur', consultarCnpj);
cnpjInput.addEventListener('keydown', apagaRazaoSocial);

function consultarCep() {

	let cep = cepInput.value;
	
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then(function (response) {
			return response.json();
		})
		.then(function (endereco) {
			logradouro.value = endereco.logradouro;
			logradouro.readOnly = true;

			cidade.value = endereco.localidade;
			cidade.readOnly = true;

			estado.value = endereco.uf;
			estado.readOnly = true;

			bairro.value  = endereco.bairro;
			bairro.readOnly = true;
		})
		.catch(function (erro) {
			cepInput.value = "";
			alert('Erro ao consultar CEP');
		})
}

function apagaEndereco () {
	logradouro.value = "";
	logradouro.readOnly = false;

	cidade.value = "";
	cidade.readOnly = false;

	estado.value = "";
	estado.readOnly = false;

	bairro.value  = "";
	bairro.readOnly = false;
}

function consultarCnpj() {

    let cnpj = cnpjInput.value;
    
    alert(cnpj)
	
	fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (empresa) {
			razaoSocial.value = empresa.nome;
			razaoSocial.readOnly = true;
		})
		.catch(function (erro) {
			cnpj.value = "";
			alert('Erro ao consultar CNPJ');
        })
}

function apagaRazaoSocial () {
	razaoSocial.value = "";
	razaoSocial.readOnly = false;
}


