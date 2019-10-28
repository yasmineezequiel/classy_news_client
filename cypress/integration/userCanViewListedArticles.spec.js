describe('user can view listed articles', () => {
  it('sees articles displayed', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/articles',
      response: 'fixture:articles.json'
    })
    cy.visit('http://localhost:3001')
    cy.get('h1').should('contain', 'Classy News')
    cy.get('h2')
      .should('contain', 'Leonardo da Vinci five centuries on:')
      .should('contain', 'Some Title')
    cy.get('.article-content')
      .should('contain', 'The Louvre museum in Paris,')
      .should('contain', 'Some good content')
    cy.get('.article-author')
      .should('contain', 'Lauren Lion')
      .should('contain', 'Some awesome author')
  })

  xit('sees error message for no articles', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/articles',
      status: 400,
    })
    cy.visit('http://localhost:3001')
    cy.contains('Request failed with status code 404')
  })
})