
var lezmit={
    nombre:'lezmit',
    apellido: 'Galarza',
    edad: 16,
    peso:62
}
console.log(`Al inicio del anio ${lezmit.nombre} pesa ${lezmit.peso}kg `)

const DIAS_ANIO=365
const INCREMENTO_PESO=0.2
const META= lezmit.peso-3

const aumentarPeso= persona=>persona.peso+=INCREMENTO_PESO
const adelgazar=persona=>persona.peso-=INCREMENTO_PESO
const comeMucho=()=>Math.random()<0.3
const haceEjercicio=()=>Math.random()<0.4
var dias =0

while(lezmit.peso>META){
    if(comeMucho()){
        aumentarPeso(lezmit)
    }
    if(haceEjercicio()){
        adelgazar(lezmit)
    }
    dias+=1
}

console.log(`Pasaron ${dias} dias hasta que ${lezmit.nombre} adelgazo 3kg `)
