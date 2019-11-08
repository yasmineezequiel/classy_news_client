import 'cypress-file-upload';

Cypress.Commands.add("user_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v1/auth/sign_in",
    response: "fixture:successful_user_login.json"
  });
  cy.visit("http://localhost:3001")
  cy.get('#login-button').click()
    cy.get('#login-form').within(()=> {
      cy.get('#email-input').type(email)
      cy.get('#password-input').type(password)
    })
    cy.get('#submit-login-form').click()
})

Cypress.Commands.add("journalist_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v1/auth/sign_in",
    response: "fixture:successful_journalist_login.json"
  })
  cy.visit("http://localhost:3001");
  cy.get('#login-button').click()
    cy.get('#login-form').within(()=> {
      cy.get('#email-input').type(email)
      cy.get('#password-input').type(password)
    })
    cy.get('#submit-login-form').click()
})

Cypress.Commands.add("unsuccessful_user_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v1/auth/sign_in",
    response: "fixture:unsuccessful_user_signup.json"
  });
  cy.visit("http://localhost:3001")
  cy.get('#login-button').click()
    cy.get('#login-form').within(()=> {
      cy.get('#email-input').type(email)
      cy.get('#password-input').type(password)
    })
    cy.get('#submit-login-form').click()
})