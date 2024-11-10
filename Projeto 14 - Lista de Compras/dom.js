/* Adicionando evento para dizer que a pagina foi carregada no element.*/
window.addEventListener("load", () => {
    console.log("A pagina foi carregada");
})

const capturarclick = document.querySelector(".adicionar_um_novo_item1");

capturarclick.addEventListener("click", (event) => {
    console.log("Voce clicou no input");
    event.preventDefault()
})

const capturarbotao = document.querySelector(".adicionar_item1");

capturarbotao.addEventListener("click", (event) => {
    console.log("Voce adicionou um item")
    event.preventDefault()
})

const paodeforma = document.querySelector(".button_pao");

paodeforma.addEventListener("click", (event) => {
    console.log("Voce adicionou o item Pão de Forma na lista.");
    event.preventDefault();
})

const cafepreto = document.querySelector(".button_cafe");

cafepreto.addEventListener("click", (event) => {
    console.log("Voce adicionou um café preto na lista");
    event.preventDefault();
})

const sucodelaranja = document.querySelector(".button_suco");
sucodelaranja.addEventListener("click", (event) => {
    console.log("Voce adicionou um suco de laranja na lista de compras");
})

const bolacha = document.querySelector(".button_bolacha");
bolacha.addEventListener("click", (event) => {
    console.log("Voce adicionou uma bolacha na lista de compras");
})

const voltar = document.querySelector("button");

voltar.addEventListener("click", (event) => {
    console.log("Voce voltou a pagina");

})

const remove1 = document.querySelector(".remove1");

remove1.addEventListener("click", (event) => {
    console.log("Voce removeu o bolacha da lista.");
} )

const remove2 = document.querySelector(".remove2");

remove2.addEventListener("click", (event) => {
    console.log("Voce removeu o Suco de Laranja da lista.");
} )

const remove3 = document.querySelector(".remove3");

remove3.addEventListener("click", (event) => {
    console.log("Voce removeu o Café Preto da lista.");
} )

const remove4 = document.querySelector(".remove4");

remove4.addEventListener("click", (event) => {
    console.log("Voce removeu o Pão de Forma da lista.");
} )

const alertremove = document.querySelector(".span");

alertremove.addEventListener("click", () => {
    alert("Voce removeu o item da lista.");
})
