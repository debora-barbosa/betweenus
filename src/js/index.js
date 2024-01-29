const botao = document.querySelector(".btn-plataformas");
const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
    console.log("Clique no botão!");
    elementoPlataformas.classList.toggle("ativo");
});
