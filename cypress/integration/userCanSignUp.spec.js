describe('User can sign up', () => {
  beforeEach(() => {
    cy.server()
  })

  it('successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/auth',
      response: 'fixture:successful_user_sign_up.json',
      status: 200
    })

    cy.visit('http://localhost:3001')
    cy.get('#signup-button').click()
    cy.get('#signup-form').within(()=> {
      cy.get('#email-input').type('user@mail.com')
      cy.get('#password-input').type('password')
    })
  })
})
