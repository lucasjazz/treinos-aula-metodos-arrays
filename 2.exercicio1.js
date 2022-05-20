function inverterString(texto) {

    let textoFinal = "";

    const arrayDeLetras = texto.split("");

    for (let letra of arrayDeLetras.reverse()) {
        textoFinal += letra;
    }
    console.log(textoFinal);
}

inverterString("Cubos Academy");