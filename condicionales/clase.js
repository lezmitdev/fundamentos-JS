var sasha={
    nombre:'sasha',
    apellido: 'Galar',
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    
    if(persona.ingeniero){
        console.log('ingeniero')
    }
    if(persona.cocinero){
        console.log('cocinero')
    }
    if(persona.cantante){
        console.log('cantante')
    }
    if(persona.dj){
        console.log('dj')
    }
    if(persona.drone){
        console.log('drone')
    }
}

const MAYORIA_EDAD=18
const esMayorEdad=({edad})=>edad>=MAYORIA_EDAD
//const esMenoredad=({edad})=>!esMayorEdad

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorEdad(persona)){
        console.log('Sacha es mayor de edad')
    }
    else{
        console.log('Sacha es menor de edad ')
    }
}

function permitirAcceso(persona){
    if(!esMayorEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}
imprimirProfesiones(sasha);
imprimirSiEsMayorDeEdad(sasha);
permitirAcceso(sasha);