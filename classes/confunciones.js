

function cumplirAnios() {
  this.edad++
}

function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
  this.cumplirAnios = cumplirAnios
}

function Perro(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
  this.ladrar = function () {
    console.log('guau guau')
  }
  this.cumplirAnios = cumplirAnios
}

const jorge = new Persona('Jorge', 33)
jorge.cumplirAnios()
console.log(jorge.edad)

const colita = new Perro('colita', 6)
colita.ladrar()
colita.cumplirAnios()
console.log(colita.edad)