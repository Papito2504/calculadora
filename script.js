document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 0 || n > 100 || isNaN(n)) return "O numero deve ser de 0 A 100!";
    if (n <= 15) return "vou ficar bravo se ficar sabendo disso!";
    if (n <= 30) return "isso é pouco, quero divorcio";
    if (n <= 50) return "é mais, né?! ";
    if (n <= 90) return "pode melhorar, né?";
    return "fofo, mas eu te amo mais";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }
