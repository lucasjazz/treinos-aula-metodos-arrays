function inverterString(texto) {

    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();
    console.log(arrayDeLetras.join(""));

}

inverterString("Cubos Academy");