document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
var nome = document.getElementById("nome").value
var telefone = document.getElementById("email").value
var email = document.getElementById("telefone").value

  if (nome != "" && email !="" && telefone !="" ){
    alert("Prontinho! você receberá as novidades por email!")
  }else{
    alert("Por favor, preencha os campos obrigatórios!")
  }
  console.log(nome, telefone, email)
}