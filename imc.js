const calcular = document.getElementById('calcular')


function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value  
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorImc = (peso/ (altura * altura)).toFixed(2) //Cálculo do IMC = Peso dividido pela altura ao quadrado. (toFixed para usar somente duas casas decimais)
        
        let classificacao = ''
        if (valorImc < 18.5) {
            classificacao = ' abaixo do peso.'
        } else if (valorImc < 25 ) {
            classificacao = 'no peso ideal. Parabéns'
        } else if (valorImc < 30) {
            classificacao = 'levemente acima do peso.'
        } else if (valorImc < 35) {
            classificacao = 'obesidade grau I.'
        } else if (valorImc < 40) {
            classificacao = 'obesidade grau II.'
        } else {
            classificacao = 'obesidade grau III.'
        }
        
        resultado.innerText = `Olá ${nome}, seu IMC é ${valorImc}. Você está ${classificacao}`

    } else {
        resultado.innerText = 'Preencha todos os campos'
    }

}
calcular.addEventListener('click', imc)