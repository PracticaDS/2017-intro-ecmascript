
const multiplicar = (a, b) => a * b

const porDos = multiplicar.bind(null, 2)

porDos(2)