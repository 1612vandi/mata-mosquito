// Ajustando tamanho da tela no navegador(palco do jogo)
var altura = 0
var largura = 0
var vida = 1
var tempo = 15
var tempoMosquito = 1500

// Aplicando o nivel de dificuldade no jogo
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
  tempoMosquito = 1500
} else if (nivel = 'dificil') {
  tempoMosquito = 1000
} else if (nivel = 'chucknorris') {
  tempoMosquito = 750
}

//Função para ajustar o ecrã
function ajustaPalcoDoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(altura, largura)
}

ajustaPalcoDoJogo()

//Cronometro para controlar o tempo do jogo
var cronometro = setInterval(function () {
  tempo -= 1

  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(mosquito)

    window.location.href = 'victoria.html'
  } else {
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000);


//Função para Criar tamanhos randomicos 
function posicaoRandomica() {

  // Remoção automatica do elemento mosquito caso exita´
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    if (vida > 3) {
      window.location.href = 'fim_jogo.html'
    } else {
      document.getElementById('v' + vida).src = 'imagens/coracao_vazio.png'
      vida++
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY
  console.log(posicaoX, posicaoY)

  //Crindo elemento html " mosquito"
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosca.png'
  mosquito.className = tamanhoAleartorio() + ' ' + ladoAleartorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'

  // Removendo elemento mosquito clicando sobre ele
  mosquito.onclick = function () {
    this.remove()
  }
  document.body.appendChild(mosquito)
}

// Função para mudar o tamanho do mosquito aleartoriamente
function tamanhoAleartorio() {
  var classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'

  }
}

// Função para mudar o lado do mosquito aleartoriamente
function ladoAleartorio() {
  var classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB '
  }
}

// função iniciarjogo
function iniciarjogo() {
  var nivel = document.getElementById('nivel').value

  if (nivel === '') {
    alert('Selecione um nivel para iniciar o jogo')
    return false
  }
  window.location.href = "app.html?" + nivel
}





