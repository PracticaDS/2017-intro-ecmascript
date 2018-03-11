const readline = require('readline')
import { exec } from 'child_process'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const decir = (algo, callback) => {
  process.stdout.write('>')
  exec(`say "${algo}"`, callback)
}

const leer = (pregunta, atributo, objeto, callback) => {
  decir(pregunta, () => {
    rl.question(`${pregunta} `, leido => {
      objeto[atributo] = leido
      callback({
        ...objeto,
        [atributo]: leido
      })
    })
  })
}


const run = () => {
  leer('Como te llamas ?', 'nombre', {}, persona => {
    decir(`${persona.nombre} que bien`, () => {
      leer('Y tu apellido ?', 'apellido', persona, persona => {
        leer('Edad ?', 'edad', persona, persona => {
          const { nombre, apellido, direccion, edad } = persona
          decir(`Hola ${nombre} ${apellido}, así que tenés ${edad} años ? que bien !`, () => {
            rl.close()
          })
        })
      })
    })
  })
}

run()

