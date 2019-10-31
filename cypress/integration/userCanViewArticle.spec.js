describe('user can view chosen article', () => {
  it('sees article displayed', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles.json'
    })
    cy.visit('http://localhost:3001')
    cy.get('h1').should('contain', 'Classy News')
    cy.get('a')
    cy.contains("Leonardo da Vinci five centuries on").click()
    cy.contains("to a display")
    cy.contains('Lauren Lion')
    cy.contains('20 October 2019')
  })

  it('sees error message for chosen non-existent article', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/show',
      status: 404,
    })
    cy.visit('http://localhost:3001')
    cy.contains('Not Found')
  })
})