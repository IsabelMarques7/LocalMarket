let produtos

window.onload = function (){
    var storeUser = localStorage.getItem("user")
    var user = JSON.parse(storeUser)
    document.getElementById("user").textContent = user.name
    document.getElementById("perfil").textContent = user.entryDate
    document.getElementById("idPerfil").textContent = user.id
}

document.addEventListener("DOMContentLoaded", function (){
    fetch("../dados/store.json")
    .then((Response) => Response.json())
    .then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container")

        produtos.forEach((produto, index) => {
            const card = document.createElement("div")
            card.className = "card"
            card.style.width = "18rem"
            card.style.marginRight = "10px"

            const imagem = document.createElement("img")
            imagem.src = produto.imagem
            imagem.className = "card-img-top"

            const cardBody = document.createElement("div")
            cardBody.className = "cardBody"

            const cardTitle = document.createElement("h5")
            cardTitle.className = "card-title"
            cardTitle.textContent = produto.descrição

            const cardText = document.createElement("p")
            cardText.className = "card-text"
            cardText.textContent = "preço: R$ " + produto.preco.toFixed(2)

            const btnAdiconarAoCarrinho = document.createElement("a")
            btnAdiconarAoCarrinho.href = "#"
            btnAdiconarAoCarrinho.className = "btn btn-primary btn-adicionar-ao-carrinho"
            btnAdiconarAoCarrinho.textContent = "Adicionar ao carrinho"
            btnAdiconarAoCarrinho.setAttribute("data-indice", index)

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btnAdiconarAoCarrinho)

            card.appendChild(imagem)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)
        })
    })

    .catch((error) => console.error("erro ao carregar o  arquivo JSON", error))
})