


var campoFiltro = document.querySelector("#filtrar-tabelas")

campoFiltro.addEventListener("input", function(){
    var paciente = document.querySelectorAll(".paciente")

    if(this.value.length > 0){ //"se tiver digitado"
        for(var i = 0; i < pacientes.length; i++){ // o for esta pegando todos os paciente
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i"); // 1.0
    
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel");
        }
    }
})

// 1.0 - RegExp permite fazer busca em textos de forma simples, armazenamos em uma variavel expressao a função
// var expressao = new RgExp(this.value, "i") o i serve para falar que quer buscar tanto por letrar maiusculas
// Quanto minusculas
