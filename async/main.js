const readline = require('readline')
import { exec } from 'child_process'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const leer = (pregunta, atributo) => async objeto => {
  const leido = await decir(pregunta)
  
  return new Promise((resolve, reject) => {  
    rl.question(`${pregunta}`, leido => {
      objeto[atributo] = leido
      resolve({
        ...objeto,
        [atributo]: leido
      })
    })
  })
}

const pipe = (...pasos) => inicial => 
  pasos.reduce((acc, paso) => acc.then(paso), Promise.resolve(inicial))

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


const run = async () => {

  const { nombre, apellido, direccion, edad } = await pipe(
    leer('Como te llamas ?', 'nombre'),
    async persona => {
      await decir(`${persona.nombre} que bien`)
      return persona
    },
    
    leer('Y tu apellido ?', 'apellido'),
    leer('Edad ?', 'edad'),
  )({})

  await decir(`Hola ${nombre} ${apellido}, así que tenés ${edad} años ? que bien !`)

  rl.close()
}

run()

