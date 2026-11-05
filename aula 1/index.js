let nome = "Gudryan"
let idade = 18

console.log("Olá mundo", idade)

console.log("Meu nome é: "+ nome);
console.log("Minha idade é: "+ idade)

// vetor em JavaScript

let frutas= ["maça", "uva","laranja"];
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

frutas.push("Abacate");
console.log(frutas)

frutas.pop();
console.log(frutas)

let numeros = [10,20,30,40]
console.log(numeros.length)

let nomee = "Gudrian";
console.log(nome.length)

let nomes = ["Ana", "Beatriz", "João", "Carlos"]

let nomeEncontrado = nomes.filter(nome => nome === "João")
console.log(nomeEncontrado)

let cores = ["Azul", "vermelho", "Verde"];
cores.forEach(cor=>{
    console.log("Cor " + cor)
})
