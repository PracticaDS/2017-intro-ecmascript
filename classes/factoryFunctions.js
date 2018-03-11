
// factory
const AutoPrototype = {
  drive () {
    console.log('Vroom!')
  }
}

function crearAuto() {
  return Object.create(AutoPrototype)
}