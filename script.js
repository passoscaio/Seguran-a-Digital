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