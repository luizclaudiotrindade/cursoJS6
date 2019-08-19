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

//const idade = usuarios.map(item =>  item.idade)
//console.log(idade)

//const anos= usuarios.filter(item =>item.empresa==='Rocketseat' && item.idade>18)
//console.log(anos)

//const pesquisa= usuarios.find(item =>item.empresa==="google")
//console.log(pesquisa)

const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);
console.log(calculo);
// 50% Concluido