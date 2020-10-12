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
			estado.disabled = true;

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
	estado.disabled = false;

	bairro.value  = "";
	bairro.readOnly = false;
}

function consultarCnpj() {

	let cnpj = cnpjInput.value.replace(/[^0-9]/g, '');
	
	$.ajax ({
		'url': `https://www.receitaws.com.br/v1/cnpj/${cnpj}`,
		'type': 'GET',
		'dataType': 'jsonp',
		'success': function(response) {
			if(response.nome == undefined) {
				alert("Erro ao consultar CNPJ");
				cnpj.value = "";
			} else {
				razaoSocial.value = response.nome;
				razaoSocial.readOnly = true;
			}
		}
	})
}

function apagaRazaoSocial () {
	razaoSocial.value = "";
	razaoSocial.readOnly = false;
}