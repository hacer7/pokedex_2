/// <reference types="cypress" />

describe('Rentago test', () => {

  it('registration test',() => {
    cy.visit('https://rentago-client.herokuapp.com/auth/registration')

    cy.get('input[name="first_name"]').type('Pan')
    cy.get('input[name="last_name"]').type('Roman')
    cy.get('input[name="email"]').type('panroman@yopmail.com')
    cy.get('input[name="phone"]').type('+380333333333')
    cy.get('input[type="password"]').should('exist').type('parolpanaromana')
    cy.get('[data-testid="VisibilityOffIcon"]').click()
    cy.get('input[type="password"]').should('not.exist')
    cy.get('[data-testid="VisibilityIcon"').click()
    cy.get('input[type="password"]').should('exist')
    cy.get('button').contains('Register').click()

    cy.contains('OK').click()
  })

  it('sign in test', () => {
    cy.visit('https://rentago-client.herokuapp.com/auth/signin')

    cy.contains('Sign in to Rentago').should('be.visible')
    cy.get('input[type="text"]').should('be.visible').type('panroman@yopmail.com')
    cy.get('input[type="password"]').should('be.visible').type('parolpanaromana')

    cy.get('[data-testid="VisibilityOffIcon"]').should('be.visible').click()
    cy.get('input[type="password"]').should('not.exist')

    cy.get('[data-testid="VisibilityIcon"]').should('be.visible').click()
    cy.get('input[type="password"]').should('exist')

    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://rentago-client.herokuapp.com/L/dashboard')
  })

  it.only('add photo', () =>{
    cy.visit('https://rentago-client.herokuapp.com/L/dashboard')

    cy.get('[href="/L/settings"]').click()

    cy.get('[data-testid="AddAPhotoIcon"]').click()
  })

  // it('tenant dashboard test', () => {
  //   cy.visit('https://rentago-client.herokuapp.com/T/dashboard')

  //   cy.get('a[href="/T/settings"]').click()
  // })
})