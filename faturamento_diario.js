const fs = require('fs');

const rawData = fs.readFileSync('./dados.json', 'utf8');
const data = JSON.parse(rawData);

function getMinFaturamentoDia(dadosFaturamento) {
    let minFaturamento = 9999999;
    dadosFaturamento.forEach(dia => {
        if (minFaturamento > dia.valor)
            minFaturamento = dia.valor
    });
    return minFaturamento;
}

function getMaxFaturamentoDia(dadosFaturamento) {
    let maxFaturamento = 0;
    dadosFaturamento.forEach(dia => {
        if (maxFaturamento < dia.valor)
            maxFaturamento = dia.valor
    });
    return maxFaturamento;
}

function countDiasAcimaMedia(dadosFaturamento) {
    let somaFaturamento = 0;
    let qtdDias = 0;
    dadosFaturamento.forEach(dia => {
        if (dia.valor > 0) {
            somaFaturamento += dia.valor;
            qtdDias++;
        }
    })
    const mediaFaturamento = somaFaturamento / qtdDias;
    let diasAcimaDaMedia = 0;
    dadosFaturamento.forEach(dia => {
        if (dia.valor > mediaFaturamento)
            diasAcimaDaMedia++;
    })
    return diasAcimaDaMedia;
}
const menorFaturamento = getMinFaturamentoDia(data)
const maiorFaturamento = getMaxFaturamentoDia(data)
const diasAcimaDaMedia = countDiasAcimaMedia(data)
console.log("Menor faturamento do mês:", menorFaturamento);
console.log("Maior faturamento do mês:", maiorFaturamento);
console.log("Quantidade de dias de faturamento acima da media mensal:", diasAcimaDaMedia);