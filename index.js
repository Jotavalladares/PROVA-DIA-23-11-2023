function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function obterClassificacao(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade Grau 1";
    } else if (imc < 39.9) {
        return "Obesidade Grau 2";
    } else {
        return "Obesidade Grau 3";
    }
}

var usuarios = [];

for ( let i = 0; i < 10; i++) {
    var nome = prompt("Informe o nome do usuário " + (i + 1) + ":");
    var peso = parseFloat(prompt("Informe o peso (em kg) de " + nome + ":"));
    var altura = parseFloat(prompt("Informe a altura (em metros) de " + nome + ":"));

    var imc = calcularIMC(peso, altura);

    var classificacao = obterClassificacao(imc);

    var usuario = {
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc,
        classificacao: classificacao
    };

    usuarios.push(usuario);
}

for (let i = 0; i < 10; i++) {
    console.log("Usuário: " + usuarios[i].nome);
    console.log("IMC: " + usuarios[i].imc.toFixed(2));
    console.log("Classificação: " + usuarios[i].classificacao);
    console.log("-------------");
}
