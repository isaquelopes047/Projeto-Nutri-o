var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibeMensagemDeErro(erros);

        return;
    }

    if(!validaPaciente(paciente)){
        console.log("invalido")

        return;
    }


    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = ""
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente){

    var erros = []
    
    if(!validaPeso(paciente.peso)){
        erros.push("O peso é invalido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalida");
    }

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(paciente.gordura.length == 0){
        erros.push("A porcentagem de gordura não pode ser 0");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser 0");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser 0");
    }


    return erros;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


