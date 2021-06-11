var lezmit={
    nombre:'lezmit',
    apellido: 'Galarza',
    edad: 16,
    peso:62
}
console.log(`Al inicio del anio ${lezmit.nombre} pesa ${lezmit.peso}kg `)

const DIAS_ANIO=365
const INCREMENTO_PESO=0.2

const aumentarPeso= persona=>persona.peso+=INCREMENTO_PESO
const adelgazar=persona=>persona.peso-=INCREMENTO_PESO

for(var i=1;i<=DIAS_ANIO;i++){
    var random= Math.random()
    if(random<0.25){
        aumentarPeso(lezmit)
    }
    if(random>0.25 && random<0.5){
        adelgazar(lezmit)
    }
}

console.log(`Al final del anio ${lezmit.nombre} pesa ${lezmit.peso.toFixed(2)}kg `)
