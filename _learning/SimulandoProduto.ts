interface Produto {
    descricao: string,
    precoCusto: number,
    margemLucro: number
}

function ValorVenda(prod: Produto){
    return prod.precoCusto + prod.margemLucro
}

let prod1: Produto = {descricao: "nome", precoCusto: 10, margemLucro: 20}

console.log(ValorVenda(prod1))
