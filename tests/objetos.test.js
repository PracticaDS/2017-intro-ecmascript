import { expect } from 'chai'
import { juan, pedro } from '../objetos/objetos'

describe('Objetos', () => {

  it('permite acceder a properties como un diccionario', () => {
    expect(juan.nombre).to.be.equal('juan')

    expect(juan['nombre']).to.be.equal('juan')
  })

  it('permite tener métodos', () => {
    const edad = pedro.edad

    pedro.cumplirAnios()

    expect(pedro.edad).to.be.equal(edad + 1)
  })

})
