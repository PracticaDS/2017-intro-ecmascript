

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
  cumplirAnios() {
    this.edad++
  }
}


class Gato extends Persona {
  constructor(nombre, edad) {
    super(nombre, edad)
  }
  maullar() {
    console.log('miaaauuuu')
  }
}