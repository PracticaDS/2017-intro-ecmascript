
const flip = fn => (a, b) => fn(b, a)

const descripcion = (nombre, apellido) => `${nombre} ${apellido}`

console.log('flip', flip(descripcion)('Juan', 'Topo'))
