

function cumplirAnios() {
  this.edad++
}

function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
  this.cumplirAnios = cumplirAnios
}

// reutilizando métodos

function Perro(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
  this.ladrar = function () {
    console.log('guau guau')
  }
  this.cumplirAnios = cumplirAnios
}

const colita = new Perro('colita', 6)
colita.ladrar()
colita.cumplirAnios()
console.log(colita.edad)

// herencia

function Gato(nombre, edad) {
  Persona.call(this, nombre, edad)
  this.maullar = () => { console.log('miaaaauuuu') }
}
Gato.prototype = Persona


const pelusa = new Gato('pelusa', 3)
pelusa.maullar()
pelusa.cumplirAnios()
console.log(pelusa.edad)


// traits

const maullar = () => console.log('miaaaau')
const ladrar = () => console.log('guau')

const include = (instance, method) => {
  instance[method.name] = method.bind(instance)
}

function BestiaInfernal(nombre) {
  include(this, maullar)
  include(this, ladrar)
}

const unaBestia = new BestiaInfernal('frankie perro-gato')
unaBestia.maullar()
unaBestia.ladrar()