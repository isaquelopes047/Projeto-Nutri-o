var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Pacientes")

    var xhr = new XMLHttpRequest(); //1.0

    xhr.open("GET", "https://api-pacientes.herokuapp.´~com/pacientes") //2.0

    xhr.addEventListener("load", function(){ //4.0

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta) //5.0
            
            pacientes.forEach(function (paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
        }

    })
    
    xhr.send(); //3.0
})

// 1.0 Responsavel por fazer requisiçoes de API
// 2.0 Abrir a requisar GET, vai ser o tipo de requisação e depois passa o URL
// 3.0 Vai enviar a requisação

// 4.0  Para mostrar os dados da requisão podemos colocar um evento que quanto a requisição
//      estiver pronta mostrar no console os dados recebidos
/*
        xhr.addEventListener("load", function(){
            console.log(xhr.responseText)
        }) 

        responseText = o texto da resposta
 */

// 5.0 JSON.parse ele lê o arquivo e entrega como objeto JS