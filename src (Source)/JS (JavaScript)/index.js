/*
 * @author Vinícius

 objetivo 1 clicar no botão de trailer e abrir a modal com o video do trailer.
   - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
   - passo 2 - dar um jeito de indentificar quando o usuário clica no botão.
   - passo 3 - dar um jeito de pegar o elemento da modal no JS.
   - passo 4 - abrir a modal na tela.

 objetivo 2 quando clicar no X, fechar a modal
   - passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o JS.
   - passo 2 - dar um jieto de identificar quando o usuário no X
   - passo 3 - fechhar a modal

*/

// - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
console.log('mostrar o document', document);
console.log(document.querySelector(".botao-trailer"));
const botaoTrailer = document.querySelector(".botao-trailer");
const modalVideo = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modalVideo.classList.toggle("aberto");
}

// - passo 2 - dar um jeito de indentificar quando o usuário clica no botão.
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    // - passo 4 - abrir a modal na tela.
   modalVideo.classList.add("aberto");
   video.setAttribute("src", linkDoVideo)
});

const modal = document.querySelector(".modal");

const fecharModal = document.querySelector(".fechar-modal");
fecharModal.addEventListener("click", () => {
    alternarModal ();
    video.setAttribute("src","")
});
