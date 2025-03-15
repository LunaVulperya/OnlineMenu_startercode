// Simulação de adição de produtos a cesta do site
const addbutton = document.querySelectorAll(".additem");
const listaPedido = document.getElementById("lista-pedido");
const totalElemento = document.getElementById("total");
let total = 0;


//Percorre os botoes com um loop e add um evento para cada um deles q foi clicado
addbutton.forEach(botao => {
    botao.addEventListener('click', () => {
        
        //Obtem o elemento pai do botao
        const produto = botao.parentElement;

        // Obtem o nome do produto a partir do texto dentro da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        //Obtem o preco do produto, removendo o texto e convertendo para decimal
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$',''));

        // Cria novo item de lista para adicionar o produto ao pedido
        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        listaPedido.appendChild(itemPedido);

        // Atualiza o total da compra somando os precos
        total += preco;

        // Adiciona item criado a lista de pedido
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

// Simulação de finalizacao do pedido
// Seleciona o botao finalizar pedido
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

// adiciona evento de clique ao botao finalizar-pedido
botaoFinalizarPedido.addEventListener('click', () =>{
    alert("Pedido realizado com sucesso (Simulação) - " + (totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`));
    listaPedido.innerHTML = '';
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});
