describe('Classy News Network user can view a list of articles', () => {
 it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles.json'
    })
  })
  it("contains a title",() => {
    cy.contains("Leonardo da Vinci")
    cy.contains("Lauren Lion")
  })
})