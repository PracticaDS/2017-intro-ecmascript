import readline from 'readline'
import { exec } from 'child_process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const leer = (pregunta, objeto, nombreDeAtributo) => {
  return new Promise((resolve, reject) => {

    rl.question(pregunta, (leyo, error) => {
      if (error) {
        reject(error)
      } else {
        resolve({
          ...objeto,
          [nombreDeAtributo]: leyo
        })
      }
    })

  })
}

const pipe = steps => objeto => steps.reduce(
  (acc, fn) => acc.then(fn),
  Promise.resolve(objeto)
)

const run = async () => {

  const p2 = await leer('Como te llamas? ', {}, 'nombre')

  const p3 = await leer('Y tu apellido ? ', p2, 'apellido')

  rl.close()

  const algo = `Hola ${p3.nombre} ${p3.apellido}`
  
  exec(`say "${algo}"`, (error, stdout, stderr) => {
    if (error)
  })

}

async function execute() {
    await run()
}


execute()











