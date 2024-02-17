

/** F12 mostra o console no navegador
 * Comentário em bloco basta selecionar o bloco e apertar "crtl" e ";"
 */

/*
Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas, deve 
abrir uma caixa com os botões de seleção de plataformas.

    Passo 1 - pegar o botão de seleção de plataformas do JS pra
            poder verificar quando o usuário clicar em cima dele.
    Passo 2 - Pegar o elemento do contéudo que precisa ser mostrado.
    Passo 3 - Pegar o clique do usuário no JS.
    Passo 4 - Qdo o usuário clicar, adicionar a classe "ativo" na listagem de 
            plataformas, dentro do botão do elemento "ul" do HTML, pra que o conteúdo apareça.

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo 
e o usuário clicar em cima do botão, o contéudo de ser escondido.

     Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

/* Objetivo 1, Passo 1 */
const botao = document.querySelector(".btn-plataforma");

/* Passo 2 */
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
/* console.log(elementoPlataformas); */

/* Passo 3 */
botao.addEventListener("click", () => {
    
    // Passo 4
    /* console.log("clicou"); */
    
    /* Objetivo 2 */
    /* Passo 1 */

    const botaoEstaAberto =  elementoPlataformas.classList.contains("ativo");
    //console.log(botaoEstaAberto);

    elementoPlataformas.classList.toggle("ativo"); /* "toggle funciona alternando, se tem a clase "ativo" e tira, senão, ele coloca, substitui o if else */

    // if( botaoEstaAberto ) { /** Se tiver a classe "atvio", ele entra no if */
    //     elementoPlataformas.classList.remove("ativo");
    // }
    // else{
    //     elementoPlataformas.classList.add("ativo"); /* Se o botão não tá aberto e a pessoa clicou, é porque ela quer abrir os itens dele */
    // }

} );













