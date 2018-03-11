
// básico

function holaMundo() {
  return 'hola mundo'
}

const holaAAlguien = (alguien) => {
  return `Hola ${alguien}`
}

const holaAAlguienCorta = alguien => `Hola ${alguien}`
const chauAAlguienCorta = alguien => `Chau ${alguien}`

const holaAMuchos = (...quienes) => `Hola ${quienes.join(',')}`

// orden superior

const saludarA = (quienes, saludoFn) => {
  return quienes.map(quien => {
    return saludoFn(quien)
  })
}

const saludarACorta = (quienes, saludoFn) => 
  quienes.map(quien => saludoFn(quien))

const saludarAMasCorta = (quienes, saludoFn) => quienes.map(saludoFn)

const crearSaludador = saludo => {
  return function(aQuien) {
    return `${saludo} ${aQuien}!`
  }
}



const crearSaludador2 = saludo => {
  return (aQuien) => `${saludo} ${aQuien}!`
}

const crearSaludador3 = saludo => aQuien => `${saludo} ${aQuien}!`

// exports 

export default {
  holaMundo,
  holaAAlguien,
  holaAAlguienCorta,
  holaAMuchos,
  saludarA,
  chauAAlguienCorta,
  crearSaludador
}
