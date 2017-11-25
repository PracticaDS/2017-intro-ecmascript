
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

const saludarACorta = (quienes, saludoFn) => quienes.map(quien => saludoFn(quien))

const saludarAMasCorta = (quienes, saludoFn) => quienes.map(saludoFn)


// exports 

export default {
  holaMundo,
  holaAAlguien,
  holaAAlguienCorta,
  holaAMuchos,
  saludarA,
  chauAAlguienCorta
}
