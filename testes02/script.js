
//Variavel de lista para tarefas
let tarefas =[]

function adicionarTarefa() {

    //recebe valor do input do usuario
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    //variavel para a mensagem depois de Erro ou Sucesso
    const mensagem = document.getElementById ("mensagem")

    //Se o valor do input for vazio, mostre uma mensagem e Erro
    if (tarefa == ""){

        //mostre uma mensagem de Erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a a sua lista!"
        mensagem.textContent = mensagemErro
    } 
    else {

        //mostre uma mensagem de Sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso

        //variavel de lista (tarefas) adiciona sempre o valor do input do usuario (tarefa)
        tarefas.push(tarefa)

        renderizarTarefas()
    }

    //limpa o input do usuario
    inputTarefa.value = ""
}

function renderizarTarefas(){

    //recebe o valor da UL e depois de escrever apaga sozinho
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    //for itens na lista 
    //1. item inicial (iterador)
    //2. item final (condição)
    //3. se vai de 1 em 1 elemento ou se pula

    // for (iterador, condição, frequencia)
    
    let i = 0
    for (i; i < tarefas.length; i++){

        //cria um novo item (li) e insere na lista (ul)
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas [i]
        listaTarefas.appendChild(novaTarefa)
    } 
}