function Persona(nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
}
//Prototype es un objeto mas de js
Persona.prototype.saludar=function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
// Asi el this direcciona a window y no a Personas
//Persona.prototype.soyAlto=()=>this.altura>1.8

Persona.prototype.soyAlto=function(){
    return this.altura>1.8

}


var lezmit =new Persona('Lezmit','Galarza',1.60)

var jose =new Persona('jose','Medilla',1.82)

console.log(lezmit.soyAlto());
console.log(jose.soyAlto());