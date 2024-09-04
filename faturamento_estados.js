const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

function percentualRepresentacao(faturamentos) {
    let valorTotal = 0;
    faturamentos.forEach(estado => {
        valorTotal += estado.valor;
    });

    const percentualPorEstado = [];
    faturamentos.forEach(estado => {
        const percentual = (estado.valor / valorTotal) * 100
        percentualPorEstado.push({
            estado: estado.estado,
            percentual: percentual.toFixed(2)
        });
    });

    return percentualPorEstado
}

const resultado = percentualRepresentacao(faturamentoPorEstado);
console.log("Percentual de Representação por Estado:");
resultado.forEach(item => {
    console.log(`Estado: ${item.estado} | Percentual: ${item.percentual}%`);
});