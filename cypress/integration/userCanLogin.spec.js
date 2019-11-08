describe('User can sign up', () => {
  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001');
  })

  it('successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/auth/sign_in',
      response: 'fixture:successful_user_login.json',
      status: 200,
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.user_login('user@mail.com', 'password')
  })

  it('unsuccessfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/auth/sign_in',
      response: 'fixture:unsuccessful_user_signup.json',
      status: 422,
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.unsuccessful_user_login('user@mail.com', 'passwordd')
    cy.contains('Invalid credentials')
  })
})