
const nome = document.querySelector('#nome');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');

const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

function classificar(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

botao.addEventListener('click', function() {

    const estudante = nome.value.trim();

    if (estudante == "" || nota1.value == "" ||
        nota2.value == "" || nota3.value == "") {

        resultado.textContent = "Preencha todos os campos!";
        return;
    }

    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    if (n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10) {

        resultado.textContent = "Digite notas entre 0 e 10!";
        return;
    }

    const media = calcularMedia(n1, n2, n3);

    const situacao = classificar(media);

    resultado.textContent = estudante +
        " ficou com média " + media.toFixed(1) +
        ". Situação: " + situacao;

});
