function check() {

    //Captura de valores:
    var aluno = document.getAnimations("txtNome").value
    var AV1 = document.getElementById("txtNota1").value
    var AV2 = document.getElementById("txtNota2").value
    var AV3 = document.getElementById("txtNota3").value
    var outResultado = getElementById("txtResultado");

    //Verificar notas 1 e 2:
    if (av1 < 4) {
        outResultado.textContent = `${aluno}, você foi reprovado(a).`
    }
    if (av2 < 4) {
        outResultado.textContent = `${aluno}, você foi reprovado(a).`
    } 
    if (av3 < 4) {
        outResultado.textContent = `${aluno}, você foi reprovado(a).`
    }

    // Ver Medias:
    else if (AV1 >= 4 && AV2 >= 8 && AV3 < AV2) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 8 && AV2 >= 4 && AV3 < AV2) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 5 && AV2 >= 7 && AV3 < AV2) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 7 && AV2 >= 5 && AV3 < AV2) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 4 && AV3 >= 8 && AV2 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 8 && AV3 >= 4 && AV2 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 5 && AV3 >= 7 && AV2 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV1 >= 7 && AV3 >= 5 && AV2 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV3 >= 4 && AV2 >= 8 && AV1 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV3 >= 8 && AV2 >= 4 && AV1 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV3 >= 5 && AV2 >= 7 && AV1 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    else if (AV3 >= 7 && AV2 >= 5 && AV1 < AV3) {
        outResultado.textContent = `${aluno}, você foi aprovado(a).`
    }
    outResultado.textContent = `${aluno}, você foi reprovado(a).`
}
