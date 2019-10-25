describe('Classy News Network user can view a list of articles', () => {
 before(function() {
    cy.visit('http://localhost:3001');
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles_',
      response: 'fixture:performance_data_index.json'
    })
  })
})