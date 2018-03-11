const persona = { nombre: 'Maria', edad: 23 }
// persona = 23

persona.edad = 24

persona.edad > 18 ? 'mayor' : 'menor'

persona.edad || 88
24

const juan = { nombre: 'Juan', edad: 17 }
const zoe = { nombre: 'Zoe', edad: 10 }
const azul = { nombre: 'Azul', edad: 6 }
const claudio = { nombre: 'Claudio', edad: 34 }
let personas = [persona, juan, zoe, azul, claudio]
personas.map(p => p.edad)

personas.map(p => p.edad).reduce((acc, e) => acc + e) // suma edades

personas.map(p => p.edad).reduce((acc, e) => acc + e) / personas.length // promedio

const sum = (a, b) => a + b

const promedioEdades = personas => personas.reduce(sum) / personas.length

promedioEdades(personas.map(_ => _.edad))

const map = mapFn => array => array.map(mapFn)

const pipe = (fn1, fn2) => (arg) => fn2(fn1(arg))

pipe(map(_ => _.edad), promedioEdades)
// (arg) => fn2(fn1(arg))

const calcularPromedio = pipe(map(_ => _.edad), promedioEdades)

calcularPromedio(personas) // 18.2

console.log(`
  Vamos a generalizar un par de cosas
    (1) solo soporta unir 2 funciones, querríamos N funciones, 
    (2) la función del map es generalizable
`)

let _pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)

let _calcularPromedio = _pipe(map(_ => _.edad), promedioEdades, Math.round)
_calcularPromedio(personas) // 18


console.log('Ahora (2)')

const prop = propertyName => obj => obj[propertyName]
const average = promedioEdades

_calcularPromedio = _pipe(
    map(prop('edad')),
    average,
    Math.round
)

console.log('Promedio de edades', _calcularPromedio(personas))


// Seguimos jugando con funciones: flip

const flip = fn => (a, b) => fn(b, a)

const descripcion = (nombre, apellido) => `${nombre} ${apellido}`
console.log('flip', flip(descripcion)('Juan', 'Topo'))

// curry

const curry = fn => {
  const args = []
  const arity = fn.length
  const resolver = e => {
    args.push(e)
    return args.length === arity ? fn(...args) : resolver
  }
  return resolver
}

const sumCurrificada = curry(sum)

console.log('sum args ?', sum.length)
console.log('sum currificada', curry(sum)(2)(3))

const volume = (l, w, h) => l * w * h
var curriedVolume = curry(volume)
console.log('volume', curriedVolume(2)(3)(4))

// apply
const apply = fn => arg => fn(arg)

// combinamos todo




