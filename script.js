let senha " "

if (checkbox [0].checked) {
 senha += letrasMaiusculas [
    math.floor (math.random() * letrasMaiusculas.length)
    ];
}
   if (checkbox [1].checked) {
 senha += letrasMinusculas [
    math.floor (math.random() * letrasMinusculas.length)
    ];
}

if (checkbox [2].checked) {
 senha += numeros [
    math.floor (math.random() * numeros.length)
    ];
}

if (checkbox [3].checked) {
 senha += simbolos [
    math.floor (math.random() * simbolos.length)
    ];
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha ();
campoSenha.value = senha;


const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!?#+-@*%";


function geraSenha(){
    let senha = '' ;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}

function diminuiTamanho(){
    if (tamanhoSenha > 6){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function testarSenha {
    if (
senha.includes ("ABCDE")
        senha.includes ("abcde")
        senha.includes ("12345")
    ) {
        return false;
      }
        return true;
    }

function geraSenhaSegura (){
     let senha;
     do {
        senha = geraSenha()

    } while (testarSenha (senha) === false)
     return senha;







}