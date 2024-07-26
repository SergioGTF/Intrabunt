function mostrarMenuPrincipal() {
    console.log("Bem-vindo ao Intrabunt!");
    console.log("1. Iniciar Jogo");
    console.log("2. Opções");
    console.log("3. Sair");
}


function iniciarJogo() {
    console.log("Iniciando o jogo...");
    
}


function mostrarOpcoes() {
    console.log("Opções:");
    console.log("1. Configurações de som");
    console.log("2. Configurações de gráficos");
    console.log("3. Voltar ao menu principal");
}


function processarEscolhaMenu(escolha) {
    switch (escolha) {
        case '1':
            iniciarJogo();
            break;
        case '2':
            mostrarOpcoes();
            break;
        case '3':
            console.log("Saindo do jogo. Até mais!");
            break;
        default:
            console.log("Escolha inválida. Por favor, escolha uma opção válida.");
    }
}


function iniciarIntrabunt() {
    mostrarMenuPrincipal();


    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Escolha uma opção: ", (escolha) => {
        processarEscolhaMenu(escolha);
        readline.close();
    });
}

iniciarIntrabunt();