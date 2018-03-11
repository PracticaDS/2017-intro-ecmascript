// utils

const range = (from, to) => {
  const values = [];
  for (var i = from; i < to; i++) {
    values.push(i)
  }
  return values
}

const curry = fn => {
  const args = []
  const arity = fn.length
  const resolver = e => {
    args.push(e)
    return args.length === arity ? fn(...args) : resolver
  }
  return resolver
}

const groupBy = (propFn, array) => array.reduce((acc, obj) => {
  acc[propFn(obj)] = obj
  return acc
}, {})

// calculadora

const Tipo = {
  numero: 'numero',
  operacion: 'operacion'
}

const Boton = groupBy(_ => _.nombre, [
  ...range(0, 10).map(n => ({ tipo: Tipo.numero, nombre: `${n}`, valor: n })),
  { tipo: Tipo.operacion, nombre: '+', fn: (a, b) => a + b },
])

class Calculadora {
  constructor() {
    this.actual = Boton['0']
  }
  aprentar(boton) {
    switch (boton.tipo) {
      case Tipo.numero: {
        this.actual = this.operacion ?
          this.operacion(boton.valor)
          : boton.valor
        break;
      }
      case Tipo.operacion: {
        this.operacion = curry(boton.fn)(this.actual)
        break;
      }
    }
  }
  display() {
    return this.actual
  }
}


// console.log('Boton:', Boton)

const c = new Calculadora()
c.aprentar(Boton['3'])
c.aprentar(Boton['+'])
c.aprentar(Boton['2'])
c.aprentar(Boton['+'])
c.aprentar(Boton['1'])
console.log(c.display())