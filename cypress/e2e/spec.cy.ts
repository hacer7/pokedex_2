/// <reference types="cypress" />

describe('Pokedex e2e test', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
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

  it('pokes by type test', () => {
    cy.get('.ant-btn').should('be.visible').click()
    cy.get('.ant-popover-inner-content').contains('psychic').should('be.visible').click()
    cy.get('.ant-input').should('not.exist')
    cy.get('.ant-btn').should('have.text', 'psychic')
    cy.wait(2000)
    cy.get('.style_container__puRhW > div').contains('psychic').should('exist')

    cy.get('.ant-btn').should('be.visible').click()
    cy.get('.ant-popover-inner-content').contains('clear').should('be.visible').click()
    cy.get('.ant-btn').should('have.text', 'Type Filter')
    cy.get('.ant-input').should('exist')

  })

  it('fav pokemons test', () => {
    cy.get(':nth-child(1) > .style_heart__cECPA').should('be.visible').click()
    cy.get(':nth-child(5) > .style_heart__cECPA').should('be.visible').click()
    cy.get(':nth-child(7) > .style_heart__cECPA').should('be.visible').click()
    cy.get(':nth-child(9) > .style_heart__cECPA').should('be.visible').click()

    cy.get('[href="/favourites"]').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/favourites')
    cy.wait(1000)
    cy.contains('charmeleon').should('be.visible')

    cy.get('[href="/"]').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})