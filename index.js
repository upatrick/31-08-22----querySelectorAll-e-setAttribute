//exercício 1

const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    cards.style.background = "ff6600"
})

//exercício 2

const headers = document.querySelectorAll(".titulo-card")

headers.forEach((header) => {
    hearder.style.color = "#12265c"
    header.innerHTML = "Meu Card"
    header.style.margin = "8px"    
})

//exercício 4 e 5

const descriptionCards = document.querySelectorAll("")

descriptionCards.forEach(header) => 
description.style.color = "white"
description.textContent = "Descrição modificada"
description.style.margin = "30px 0"  

//exercicio 6

const botaoEditar = document.querySelectorAll(".botao-editar")

//exercicio 7 

const botaoApagar = document.querySelectorAll(".botao-apagar")

for (value of botaoApagar) {
    value.style.padding = "10px"
    value.style.color = "white"
    value.style.borderRadius = "8px"
    value.style.border = "none"
    value.style.background = "red"
}

//exercicio 8

botaoEditar.forEach(botao =>{
    botao.onclick = editarCard
})

function editarCard() {
    alert("Clicou no botão editar")
}

//exercicio 9

function apagarCard() {
    let response = confirm("tem certeza da exclusão?")
    if (response) {
        alert("confirmado!")
    } else {
        alert("Cancelou!")
    }
}

const variables = document.querySelectorAll(".botao-apagar")

variables.forEach((element) => {
    Element.setAtribute("onclick", "apagarCard()")
})