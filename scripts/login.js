const cnpj = document.getElementById("cnpj");

cnpj.addEventListener("keyup", function (event) {
  applyCNPJMask();
});

cnpj.addEventListener("keyup", function () {
  if (event.ctrlKey === true && event.key === "v") {
    applyCNPJMask();
  }
});

function applyCNPJMask() {
  cnpj.value = cnpj.value.replace(/\D/g, "");

  //Coloca ponto entre o segundo e o terceiro dígitos
  cnpj.value = cnpj.value.replace(/^(\d{2})(\d)/, "$1.$2");

  //Coloca ponto entre o quinto e o sexto dígitos
  cnpj.value = cnpj.value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

  //Coloca uma barra entre o oitavo e o nono dígitos
  cnpj.value = cnpj.value.replace(/\.(\d{3})(\d)/, ".$1/$2");

  //Coloca um hífen depois do bloco de quatro dígitos
  cnpj.value = cnpj.value.replace(/(\d{4})(\d)/, "$1-$2");

  cnpj.value = cnpj.value.slice(0, 18);
}
