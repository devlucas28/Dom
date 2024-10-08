document.getElementById("meuInput").addEventListener("blur", function () {
  const valor = this.value.trim();
  const mensagemDiv = document.getElementById("mensagem");

  if (valor === "") {
    mensagemDiv.textContent = "Erro: O campo não pode estar vazio!";
    mensagemDiv.style.color = "red";
  } else {
    mensagemDiv.textContent = "Sucesso: Você digitou algo!";
    mensagemDiv.style.color = "green";
  }
});
