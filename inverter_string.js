function inverterString(palavra, tamanhoPalavra) {
    if (palavra === "") {
        return "";
    }
    else {
        if (tamanhoPalavra === 1) {
            return palavra.charAt(0);
        }
        else {
            return inverterString(palavra.substring(1), tamanhoPalavra - 1) + palavra.charAt(0);
        }
    }
}
// palavra escolhida
const palavra = "engenharia";
const palavraInvertida = inverterString(palavra, palavra.length);
console.log(palavraInvertida);