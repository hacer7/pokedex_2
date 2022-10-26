/// <reference types="cypress" />
import { times } from 'lodash'

describe('Rentago test', () => {

  // it('registration test',() => {
  //   cy.visit('https://rentago-client.herokuapp.com/auth/registration')

  //   cy.get('input[name="first_name"]').type('Pan')
  //   cy.get('input[name="last_name"]').type('Roman')
  //   cy.get('input[name="email"]').type('panroman@yopmail.com')
  //   cy.get('input[name="phone"]').type('+380333333333')
  //   cy.get('input[type="password"]').should('exist').type('parolpanaromana')
  //   cy.get('[data-testid="VisibilityOffIcon"]').click()
  //   cy.get('input[type="password"]').should('not.exist')
  //   cy.get('[data-testid="VisibilityIcon"').click()
  //   cy.get('input[type="password"]').should('exist')
  //   cy.get('button').contains('Register').click()

  //   cy.contains('OK').click()
  // })

  // it('sign in test', () => {
  //   cy.visit('https://rentago-client.herokuapp.com/auth/signin')

  //   cy.contains('Sign in to Rentago').should('be.visible')
  //   cy.get('input[type="text"]').should('be.visible').type('panroman@yopmail.com')
  //   cy.get('input[type="password"]').should('be.visible').type('parolpanaromana')

  //   cy.get('[data-testid="VisibilityOffIcon"]').should('be.visible').click()
  //   cy.get('input[type="password"]').should('not.exist')

  //   cy.get('[data-testid="VisibilityIcon"]').should('be.visible').click()
  //   cy.get('input[type="password"]').should('exist')

  //   cy.get('button[type="submit"]').click()
  //   cy.url().should('eq', 'https://rentago-client.herokuapp.com/L/dashboard')
  // })

  // it('tenant dashboard test', () => {
  //   cy.visit('https://rentago-client.herokuapp.com/T/dashboard')

  //   cy.get('a[href="/T/settings"]').click()
  // })

  // it('Landlord dashboard test', () => {
  //   cy.visit('https://rentago-client.herokuapp.com/L/dashboard')

  //   context('add new properties', () => { 
  //     cy.get('button').contains('Add new Properties').click()
      
  //     cy.get('div').contains('House').click()
  //     cy.get('div').contains('Apartment').click()
  //     cy.get('div').contains('Single room').click()

  //     cy.get('svg[direction="right"]').click()

  //     cy.get('div').contains('Wifi').click()
  //     cy.get('div').contains('TV').click()
  //     cy.get('div').contains('Kitchen').click()
  //     cy.get('div').contains('Washer').click()
  //     cy.get('div').contains('Free parking').click()
  //     cy.get('div').contains('Paid parking').click()
  //     cy.get('div').contains('Air').click()
  //     cy.get('div').contains('Dedicate').click()
  //     cy.get('div').contains('Outdoor shower').click()
  //     cy.get('svg[direction="right"]').click()

  //     times(3, () => {
  //       cy.get('.carousel > :nth-child(2) > :nth-child(1)').contains('+').click()
  //     })
  //     cy.get('.carousel > :nth-child(2) > :nth-child(1)').contains('-').click()

  //     times(3, () => {
  //       cy.get('.carousel > :nth-child(2) > :nth-child(2)').contains('+').click()
  //     })
  //     cy.get('.carousel > :nth-child(2) > :nth-child(2)').contains('-').click()

  //     times(4, () => {
  //       cy.get('.carousel > :nth-child(2) > :nth-child(3)').contains('+').click()
  //     })
  //     cy.get('.carousel > :nth-child(2) > :nth-child(3)').contains('-').click()

  //     times(2, () => {
  //       cy.get('.carousel > :nth-child(2) > :nth-child(4)').contains('+').click()
  //     })
  //     times(3, () => {
  //       cy.get('.carousel > :nth-child(2) > :nth-child(4)').contains('-').click()
  //     })
  //     cy.get('svg[direction="right"]').click()

  //     cy.contains('Continue').click()

  //     cy.get('input[name="title"]').type('1')
  //     cy.get('input[name="address"]').type('1')
  //     cy.get('input[name="price"]').clear().type('1')
  //     cy.get('textarea[name="description"]').type('1')
  //     cy.contains('Continue').click()

  //     cy.get('svg[direction="right"]').click()
  //     cy.contains('Continue').click()

  //     times(2, () => {
  //       cy.get(':nth-child(1) > .MuiFormControlLabel-root > div').click()
  //     })
  //     cy.get(':nth-child(2) > .MuiFormControlLabel-root > div').click()
  //     cy.get(':nth-child(3) > .MuiFormControlLabel-root > div').click()
  //     times(2, () => {
  //       cy.get(':nth-child(4) > .MuiFormControlLabel-root > div').click()
  //     })
  //     times(2, () => {
  //       cy.get(':nth-child(5) > .MuiFormControlLabel-root > div').click()
  //     })
  //     cy.get(':nth-child(6) > .MuiFormControlLabel-root > div').click()
  //     cy.contains('Continue').click()

  //     cy.get('[value="09:00 AM"]').click()
  //     cy.get('[value="1:00 PM"]').click()
  //     cy.get('[value="5:00 PM"]').click()
  //     cy.get('[value="11:00 AM"]').click()
  //     cy.get('[value="3:00 PM"]').click()

  //     cy.get('[aria-label="Oct 28, 2022"]').click()
  //     cy.get('[value="10:00 AM"]').click()
  //     cy.get('[value="1:00 PM"]').click()
  //     cy.get('[value="4:00 PM"]').click()
  //     cy.get('[value="7:00 PM"]').click()

  //     cy.get('[aria-label="Oct 30, 2022"]').click()
  //     cy.get('[value="All day"]').click()
  //     cy.contains('Continue').click()
  //     cy.contains('Continue').click()
  //     cy.contains('Create properties').click()
  //   })

    it('is properties created', () => {
      cy.visit('https://rentago-client.herokuapp.com/L/dashboard')
      cy.get('[href="/L/92/property"]').should('be.visible')
      cy.get('[href="/L/95/property"]').should('exist')
    })
})