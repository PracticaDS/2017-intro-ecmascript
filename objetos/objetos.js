

export const juan = {
  nombre: 'juan',
  apellido: 'lopez',
  edad: 22,
}

export const pedro = {
  nombre: 'pedro',
  edad: 33,

  cumplirAnios: () => {
    pedro.edad++
  }
}

export const pedro2 = {
  nombre: 'pedro',
  edad: 33,

  cumplirAnios: function () {
    this.edad++
  }
}

export const pedro3 = {
  nombre: 'pedro',
  edad: 33,

  cumplirAnios() {
    return {
      ...this,
      edad: this.edad + 1
    }
  }

}

const persona = {
  edad: 33,
  altura: 180,
  direccion: {
    calle: 'Siempre viva'
  }
}

const { edad, ...otras } = persona

console.log('edad', edad)
console.log('otras', JSON.stringify(otras, null, 2))

const personas = [ persona, pedro2, juan ]


const [primero, a] = personas


const personaConNombre = {
  ...persona,
  ...pedro2,
  ...juan,
  nombre: 'Paolo',
  apellido: 'blah'
}

