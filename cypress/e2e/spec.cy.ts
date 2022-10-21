/// <reference types="cypress" />

describe('Pokedex e2e test', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3002')
  })

  it('input test', () => {
    
    cy.get('.ant-input').should('have.value', '')
    cy.get('.ant-input').type('pikachu').should('have.value', 'pikachu')
    
    cy.get('div').contains('pikachu').should('exist')
    cy.get('.ant-input').clear()
    cy.get(':nth-child(1)').contains('pikachu')
  })

  it('pagin test', () =>{
    cy.get('.ant-select-selection-item').click()
    cy.contains('50 / page').click()
    cy.get(':nth-child(50)').contains('diglett').should('exist')

    cy.get('.ant-select-selection-item').click()
    cy.contains('10 / page').click()
    cy.get('.ant-pagination-item-3 > a').click()
    cy.get('div').contains('pikachu').should('be.visible')

    cy.get('.ant-pagination-next > .ant-pagination-item-link > .anticon > svg').click()
    cy.contains('vulpix').should('exist')
  })

  it.only('pokemon by type test', () => {

  })
})