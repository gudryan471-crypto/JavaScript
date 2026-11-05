const produtos = { id: 1, nome: "Mouse sem fio", categoria: "Periféricos", preco: 89.90, estoque: 15, ativo: true }

  ;

  
  console.log("-----EXERCÍCIO 1-----")


  let valorTotal = (produtos.preco * produtos.estoque);
  console.log(valorTotal);

  console.log(produtos.nome + " - R$" + produtos.preco + " - " + produtos.estoque)

  const produtoAtualizado = {
    ...produtos,
    estoque: 13
  };

  console.log(produtoAtualizado)

  
    if (produtos.ativo == true) {
        console.log("Produto disponivel")
    }
    else {
        console.log("Produto Indisponivel")
    }

    console.log("-------EXERCÍCIO 2--------")

    let cliente = {
        id:1,
        nome: "Carlos Oliveira",
        endereco: {
            rua: "Ântonio Aleixo",
            numero: 585,
            cidade: "Valença"
        },
        interesses: [
            "Eletrônicos","Roupas","Alimentos"
        ]
    }

    console.log("Cidade do cliente: " + cliente.endereco.cidade)

    console.log("O primeiro interesses: "+ cliente.interesses[0])

    // Mudando endereço
    console.log( cliente.endereco.cidade = "Arraial do Cabo")

    console.log(cliente.interesses)


    console.log("-------EXERCÍCIO 3---------")

    const produto = [
        { id: 1, nome: "Mouse sem fio", categoria: "Periféricos", preco: 89.90, estoque: 15, ativo: true },
        { id: 2, nome: "Teclado mecânico", categoria: "Periféricos", preco: 249.90, estoque: 8, ativo: true },
        { id: 3, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.90, estoque: 5, ativo: true },
        { id: 4, nome: "Cabo HDMI", categoria: "Acessórios", preco: 29.90, estoque: 0, ativo: true },
        { id: 5, nome: "Headset USB", categoria: "Áudio", preco: 159.90, estoque: 12, ativo: true },
        { id: 6, nome: "Webcam HD", categoria: "Periféricos", preco: 189.90, estoque: 0, ativo: false },
        { id: 7, nome: "Monitor 27 polegadas", categoria: "Monitores", preco: 1199.90, estoque: 3, ativo: true },
        { id: 8, nome: "Caixa de som", categoria: "Áudio", preco: 119.90, estoque: 7, ativo: false },
        { id: 9, nome: "Hub USB", categoria: "Acessórios", preco: 69.90, estoque: 20, ativo: true },
        { id: 10, nome: "Mousepad", categoria: "Acessórios", preco: 24.90, estoque: 25, ativo: true }
      ];

      console.log(produto[0].nome);


