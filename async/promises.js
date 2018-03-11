const readline = require('readline')
import { exec } from 'child_process'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const preguntar = pregunta => new Promise((resolve, reject) => {
  rl.question(`${pregunta} `, resolve)
})

const leer = (pregunta, atributo, objeto) => {
  return decir(pregunta)
    .then(() => preguntar(pregunta))
    .then(leido => ({
        ...objeto,
        [atributo]: leido
    }))
}

const decir = algo => new Promise((resolve, reject) => {
  process.stdout.write('>')
  exec(`say "${algo}"`, (error, stdout, stderr) => {
    if (error) {
      reject(error)
    } else {
      resolve()
    }
  })
})


const run = () => {

  leer('Como te llamas ?', 'nombre', {})
    .then(persona => decir(`${persona.nombre} que bien`).then(() => persona))
    .then(persona => leer('Y tu apellido ?', 'apellido', persona))
    .then(persona => leer('Edad ?', 'edad', persona))
    .then(persona => decir(`Hola ${persona.nombre} ${persona.apellido}, así que tenés ${persona.edad} años ? que bien !`))
    .then(() => { rl.close() })
}

run()
