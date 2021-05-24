// Crie um objeto que receba ao menos três propriedades sobre você.
const sobre = {
    nome: "Luan",
    idade: 21,
    profissao: "programador"
}
console.log(sobre)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.esporte = "futebol"
console.log(sobre)

// Remova uma propriedade desse objeto.
delete sobre.esporte
console.log(sobre)
//Mostre no console todas as propriedades desse objeto.

// Crie um array chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
let cadastro = [{
    nome: "Luan",
    idade: 21,
    telefone: 967591140,
    amigos:["Ryan", "Lorena"]
},
{
    nome: "Luan",
    idade: 21,
    telefone: 967591140,
    amigos:["Ryan", "Lorena"]
},
{
    nome: "Luan",
    idade: 21,
    telefone: 967591140,
    amigos:["Ryan", "Lorena"]
},
{
    nome: "Luan",
    idade: 21,
    telefone: 967591140,
    amigos:["Ryan", "Lorena"]
},
{
    nome: "Luan",
    idade: 21,
    telefone: 967591140,
    amigos:["Ryan", "Lorena"]
}]
console.log(cadastro)

//Na propriedade amigos, adicione ao menos 4 itens.
for(let numero = 0; numero<= 4; numero++){
    cadastro[numero].amigos.push("Luiz", "Romulo", "Alicia", "Matheus") 
}
console.log(cadastro)
// Mostre no console o nome de um amigo de cada lista.
for(let lista = 0; lista <=4; lista++){
    console.log(cadastro[lista].amigos[lista])
}




