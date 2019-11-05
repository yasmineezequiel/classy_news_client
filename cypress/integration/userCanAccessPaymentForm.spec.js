describe('User can access payment form', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url:'http://localhost:3000/auth',
      response: 'fixture:successful_user_signup.json'
    })
    cy.visit('http://localhost:3001')
  })

  it('Successfully get payment form', () => {
    cy.get('#signup-button').click()
    cy.get('#signup-form').within(()=> {
      cy.get('#nickname-input').type('nickname')
      cy.get('#name-input').type('name')
      cy.get('#city-input').type('city')
      cy.get('#country-input').select('Sweden')
      cy.get('#email-input').type('user@mail.com')
      cy.get('#password-input').type('password')
      cy.get('#password-confirmation').type('password')
    })
    cy.get('#submit-signup-form').click()
    cy.get('#paymentform-button').click()
    cy.get('#payment-form').should('exist')
  })

  it('is not visible for visitor', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url:'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles.json'
    })
    cy.visit('http://localhost:3001')
    cy.get('#payment-form').should('not.exist')
  })
})