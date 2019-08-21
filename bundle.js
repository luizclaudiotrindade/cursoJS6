"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
class Usuario{
    constructor(email, senha){
        this.email
        this.senha
    }
    isAdmin(){
        return this.admin==true
    }
}
class Admin extends Usuario{

    constructor(email, senha){
        super()
        this.email
        this.senha
        this.admin= true
    }
}
const user1= new Usuario('luiz@gmail.com','1234')
const adm = new Admin('claudinho@gmail.com','1111')
//console.log(user1.isAdmin())
//console.log(adm.isAdmin())
const usuarios = [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }, ];
*/
//const idade = usuarios.map(item =>  item.idade)
//console.log(idade)
//const anos= usuarios.filter(item =>item.empresa==='Rocketseat' && item.idade>18)
//console.log(anos)
//const pesquisa= usuarios.find(item =>item.empresa==="google")
//console.log(pesquisa)

/*
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);
//console.log(calculo);
// 50% Concluido
*/

/*
// 3.1 
const arr = [1, 2, 3, 4, 5]; 
arr.map(item => item + 10 );
//console.log(arr)
*/

/*
// 3.2 // Dica: Utilize uma constante pra function 
const usuario = { nome: 'Diego', idade: 23 }; 
const mostraIdade = usuario => usuario.idade ;
 //console.log(mostraIdade(usuario));
*/
// 3.3 // Dica: Utilize uma constante pra function 
//const nome = "Diego"; const idade = 23; 
//const mostraUsuario = (nome = 'Diego', idade = 18) => ({
// nome, idade });  
//console.log(mostraUsuario(nome, idade)); 
//console.log(mostraUsuario(nome));
//const promise = () =>  new Promise ((resolve, reject) => resolve()); 
//Desestruturação de código

/* const empresa = {  
    nome: 'Rocketseat',  
    endereco: {    
        cidade: 'Rio do Sul',    
        estado: 'SC',  
       },
       dados:{
           rg:'123456',
           cpf: '67854246'
       } 
   };
   const { nome,endereco:{cidade,estado}, dados:{cpf}}  = empresa
   console.log(nome)
   console.log(cidade)
   console.log(estado)
   console.log(cpf)
   
   */

/* Desestruturação em pararmetros
function mostraInfo({nome,idade}) {  
    return `${nome} tem ${idade} anos.`; } 
    mostraInfo({ nome: 'Diego', idade: 23 })


console.log(mostraInfo)*/

/*
//REST
const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y]= arr
console.log(x)
console.log(y)
*/

/*
//Funcção que recebe inumeros parametros e retorna a soma deles.

 function soma (...num){
    return num.reduce((a,b) => a+b)
}
console.log(soma(1,2,3,4,5,6))
*/
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel' //console.log(usuario2)

});

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'lontras'
  })
});

console.log(usuario3);
