


// Array.map( function(param1,param2,param3){

// });

// Array.filter( param1=> console.log(param1));

// Array.map( function(item,indice,array){

// });

// Array.filter( (param1,param2)=> {
//     console.log(param1)
// });

//Declaração de um array de obj de alunos:

// let alunosObj = [
//     {id:1,nome:"Luiz Sadao",rm:45643},
//     {id:2,nome:"Pedro Virgens",rm:89322},
//     {id:3,nome:"João Paulo",rm:98765},
//     {id:4,nome:"Caroline Silva",rm:95231},
//     {id:5,nome:"Enzo Moura",rm:29413}
// ];

//Extrair um array de nomes de alunos do array de objetos.
// const nomesAlunos = alunosObj.map( aluno=> aluno.nome);

// //Imprimindo o array no console
// console.log(nomesAlunos);

// //Utilizando o filter e o includes, vamos filtrar o array de nomes para gerar um novo array de nomes, com aqueles de acordo com o teste imposto.
// const novosNomes = nomesAlunos.filter( nome=> nome.includes("n"));
// //Imprimindo o array no console
// console.log(novosNomes);
// const novosNomes2 = alunosObj.filter( aluno=> {
//     if(aluno.rm >= 90000){
//         return aluno.nome;
//     }
// });
// //Imprimindo o array no console
// console.log(novosNomes2);

// //Utilizando o find, realiza o teste e se encontrar um resultado, ele retorna o resultado e encerra a operação.
// const novoNome = nomesAlunos.find( nome=> nome.includes("n"));
// console.log(novoNome);

// //Utilizando o every, realiza o teste e somente se todos os itens da lista corresponderem a verdadeiro, ele retorna true.
// // const rangeMaisAlto = alunosObj.every( aluno=> aluno.rm >=30000 );
// // console.log(rangeMaisAlto);
// //Utilizando o some, realiza o teste e se pelo menos um dos itens da lista corresponder a verdadeiro, ele retorna true.
// const rangeMaisAlto = alunosObj.some( aluno=> aluno.rm <=30000 );
// console.log(rangeMaisAlto);

let alunosObj = [
    {id:1,nome:"Luiz Sadao",rm:45643},
    {id:2,nome:"Pedro Virgens",rm:89322},
    {id:3,nome:"João Paulo",rm:98765},
    {id:4,nome:"Caroline Silva",rm:95231},
    {id:5,nome:"Enzo Moura",rm:29413}
];

let notasObj = [
    {id:1,nota:6.5},
    {id:2,nota:3.5},
    {id:3,nota:7.7},
    {id:4,nota:8.5},
    {id:5,nota:9.5}
];

//Criar um novo obj de alunos com notas, utilizando map com find.
const alunosComNotas = alunosObj.map( a=>{
    //Realizando um comparação entre o objeto ( a ) e o objeto nota, para determinar o id correto e retornar a nota pertencente ao aluno correto.
    const notaAluno = notasObj.find( n=> n.id === a.id );
    //Criando o obj que será retornado ao novo Array alunosComNota, utilizando os outros objs presentes no MAP, (a e notaAluno).
    // return {id:a.id,nome:a.nome,rm:a.rm,nota:notaAluno.nota};
    return {...a,nota:notaAluno.nota};
});

console.log(alunosComNotas);


//Utilizando o reduce para gerar uma somatória das notas.
const somaDasNotas = alunosComNotas.reduce( (notasAcumuladas, aluno )=>{
    return (notasAcumuladas + aluno.nota)
},0);

console.log(somaDasNotas);

//Declaração um objeto padrão

 const pessoa = {
    nome:"Alexandre",
    dtNasc:"12/01/1992",
    genero:"m",
    altura:"2.10",
    peso:120,
    getNome: function(){
        return this.nome;
    },
    setNome:function(nome){
        this.nome = nome;
    }
 };

 console.log(pessoa.getNome());
 pessoa.setNome("CLEBER");
 console.log(pessoa.getNome());
 
 console.log(pessoa["dtNasc"]);
let gen = "genero"; 
 console.log(pessoa[gen]);
 gen = "peso"; 
 console.log(pessoa[gen]);

 const pessoa2 = {
    nome:"Carlos",
    dtNasc:"30/07/1972",
    genero:"m",
    altura:"1.80",
    peso:90,
    trabalhando:true,
    getNome: function(){
        return this.nome;
    },
    setNome:function(nome){
        this.nome = nome;
    }
 };

//Exemplo com operador SPREAD ...
const pessoa3 = {...pessoa,...pessoa2};
console.log(pessoa3);
