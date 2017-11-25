// factory
const AutoPrototype = {
  drive () {
    console.log('Vroom!')
  }
}

function createAuto () {
  return Object.create(AutoPrototype)
}