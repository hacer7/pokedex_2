describe('Pokedex e2e test', () => {
  it('input test', () => {
    cy.visit('http://localhost:3000')
    cy.get('.ant-input').should('have.value', '')
    cy.get('.ant-input').type('pikachu').should('have.value', 'pikachu')
    
    cy.get(':nth-child(1) > .style_name__EcM-J').should('have.text', 'pikachu')

    
  })
})