import insultos from './monkey'
import { pipe, pipeP, prop, range, without, map, concat, tap, take } from 'ramda'
const readline = require('readline')
import { exec } from 'child_process'
import shuffle from 'shuffle-array'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export const preguntar = pregunta => new Promise((resolve, reject) => {
  rl.question(`${pregunta} `, resolve)
})

const leerOpciones = (opciones, labelProvider) => {
  return preguntar(opciones.map((o, i) => `${i + 1}) ${labelProvider(o)}\n`).join(''))
    .then(leido => {
      const i = parseInt(leido)
      if (i > 0 && i <= opciones.length) {
        return opciones[i - 1]
      }
      return leerOpciones(opciones, labelProvider)
    })
}

export const decir = (algo, voz) => new Promise((resolve, reject) => {
  process.stdout.write('>')
  exec(`say -v ${voz} "${algo}"`, (error, stdout, stderr) => {
    if (error) {
      reject(error)
    } else {
      resolve()
    }
  })
})

///

const oneOf = lista => lista[Math.floor(Math.random() * lista.length)]

const opciones = (todas, actual) => pipe(
  without(actual),
  tap(shuffle),
  take(3),
  concat([actual]),
  tap(shuffle),
)(todas)

const elegirEntre = opciones => leerOpciones(opciones, prop('guybrush'))

const enfrentar = async estado => {
  const { insultos, puntos, vozNuestra, vozPirata } = estado
  const frase = oneOf(insultos)
  
  await decir(frase.pirata, vozPirata)
  console.log(`> ${frase.pirata}`)
  const elegido = await elegirEntre(opciones(insultos, frase))
  
  await decir(elegido.guybrush, vozNuestra)

  console.log(elegido === frase ? 'GANASTE' : 'PERDISTE')
  
  return { ...estado, puntos: puntos + (elegido === frase ? 1 : -1)}
}

const run = async () => {
  let estado = { insultos, puntos: 0, vozPirata: 'Jorge', vozNuestra: 'Diego' }
  while (true) {
    estado = await enfrentar(estado)
    if (estado.puntos === 3) {
      await decir('Derrotaste al pirata', 'Monica')
      return
    }
    if (estado.puntos === -3) {
      await decir('El pirata te derrotó', 'Monica')
      return
    }
  }

}

run().then(() => process.exit(0))


