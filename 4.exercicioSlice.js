function filtrar80(dados) {

    let start = Math.round(dados.length * 0.1);
    let end = Math.round(dados.length * 0.9);

    const filtro = dados.slice(start, end);

    console.log(filtro)
}

const dados = [0, 0, 12, 13, 14, 2, 5, 65, 76, 53, 43, 12, 65, 34, 78, 69, 10, 23, 22, 43, 21, 4, 1];


filtrar80(dados);