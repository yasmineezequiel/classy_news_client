describe('Classy News Network user can view a list of articles', () => {
 it('successfully', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/articles',
      response: 'fixture:articles.json'
    })
    cy.visit('http://localhost:3001');
  })
  
  it("contains a title",() => {
    cy.contains("Leonardo da Vinci")
    cy.contains("Lauren Lion")
  })
})