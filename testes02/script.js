
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
    
    for (let i = 0; i < tarefas.length; i++){

        //cria um novo item (li) e insere na lista (ul)
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas [i]

        //criei botao remover tarefa
        let botaoremover = document.createElement("button")
        botaoremover.className = "remover"
        botaoremover.textContent = "remover"
        botaoremover.onclick = () => removerTarefa(i)
    
        //criei botao editar tarefa
        let botaoeditar = document.createElement("button")
        botaoeditar.className = "editar"
        botaoeditar.textContent = "editar"
        botaoeditar.onclick = () => editarTarefa(i)

        // botao sao filhos das (li)
        novaTarefa.appendChild(botaoremover)
        novaTarefa.appendChild(botaoeditar)

        //(li) filho de (ul)
        listaTarefas.appendChild(novaTarefa)
    } 
}

function removerTarefa(i){
    
    //remover 1
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i){
    
    //criar um prompt para o que queres dizer e editar na lista (nome da tarefa)
    let tarefaEditada = prompt("Edite a Tarefa:")
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }  
}

function limparLista(){

    //caso nao haja Tarefas para limpar, ao clicar no botao (limpar tudo) aparece as mensagem de (Nada) ou (mensagem)
    if (tarefas == ""){
        const Nada = document.getElementById ("mensagem")
        Nada.textContent = "Não tem nada para Limpar"
    }
    else{
        tarefas.length = 0

        const mensagem = document.getElementById ("mensagem")
        mensagem.textContent = "Lista de Tarefas Limpa com Sucesso"
    }

    renderizarTarefas()
}