// Modal inteiro
var modal = document.getElementById("myModal");

// Botão
var btn = document.getElementById("myBtn");

// elmento span > ao clicar fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal

btn.onclick = function() {
  modal.style.display = "flex";
  modal.style.transition = 1000000  // < - ele não entende o numero para transição
}

// (x), clicando no x pra fechar o modal modal

span.onclick = function() {
  modal.style.display = "none";
}

// Quando clicarem fora do Modal ele fecha

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}