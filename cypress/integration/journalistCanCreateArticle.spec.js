describe('User can create article', () => {
  it('successfully', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:successfully_created_article.json',
      status: 200
    })
    cy.visit('http://localhost:3001')
    cy.get('#create-article').click()

    cy.get('#article-form').within(() => {
      cy.get('#title-input').type('Trump has gone insane')
      cy.get('#content-input').type('Trump has been diagnosed with crazy syndrome')

      cy.get('#submit-article').click()
    })

    cy.get('#response-message').should('contain', 'Your article was submitted for review')
  })
})
