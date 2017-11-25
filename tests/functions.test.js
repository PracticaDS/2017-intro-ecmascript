import { expect } from 'chai'
import functions from '../functions/functions'

describe('Funciones - Saludos', () => {

  it('holaMundo', () => {
    expect(functions.holaMundo())
      .to.be.equal('hola mundo')
  })

  it('holaAMuchos (varargs)', () => {
    expect(functions.holaAMuchos('Blah', 'Bleh', 'Blih', 'Bloh'))
      .to.be.equal('Hola Blah,Bleh,Blih,Bloh')
  })

  describe('Orden superior', () => {

    it('saludarA recibe una funcion como parametro', () => {
      expect(functions.saludarA(['Pipo', 'Popi'], functions.holaAAlguienCorta))
        .to.deep.equal(['Hola Pipo', 'Hola Popi'])

      expect(functions.saludarA(['Pipo', 'Popi'], functions.chauAAlguienCorta))
        .to.deep.equal(['Chau Pipo', 'Chau Popi'])
    })
    
  })

  it('Aplicación parcial (bind)', () => {
    const holaAJuan = functions.holaAAlguienCorta.bind(null, 'Juan')
    expect(holaAJuan())
      .to.be.equal('Hola Juan')
  })
  
})