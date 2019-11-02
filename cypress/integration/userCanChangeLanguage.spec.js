describe('user can change language of articles', () => {
  it('changes language of article successfully', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles.json'
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles_translation.json'
    })
    cy.visit('http://localhost:3001')
    cy.get('h1').should('contain', 'Classy News')
    cy.get('h2')
      .should('contain', 'Leonardo da Vinci five centuries on:')
      .should('contain', 'Some Title')
    cy.get('#swedish-button').click()
    cy.get('h2')
      .should('contain', 'Leonardo da Vinci fem decennier på:')
      .should('contain', 'Någon Titel')
  })

  it('sees error message for no articles translation', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      status: 404,
    })
    cy.visit('http://localhost:3001')
    cy.get('#swedish-button').click()
    cy.get('#error-message')
  })
})