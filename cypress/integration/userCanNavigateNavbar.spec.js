describe('User can navigate NavBar', () => {
  beforeEach(() => {
    cy.server()
  });

  it('journalist can access the write article page', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
    })
    cy.get('#write-article').click()
    cy.get('#article-form').should('exist')
  });

  it('user can not access the write article page', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/articles',
    })
    cy.get('#write-article').should('not.exist')
  });
})
