
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
