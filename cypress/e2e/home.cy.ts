describe('Home', () => {
  it('Home', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/');
    cy.getBySel('welcome')
      .should('be.visible')
      .should('contain.text', 'Welcome to Checklists!');
    cy.getBySel('local-storage_signals-link')
      .should('be.visible')
      .should('contain.text', 'Using Signals');
    cy.getBySel('local-storage-signal-store')
      .should('be.visible')
      .should('contain.text', 'Using Signal Store');
    cy.getBySel('angular-fire-basic')
      .should('be.visible')
      .should('contain.text', 'Basic');
    cy.getBySel('angular-fire-signals')
      .should('be.visible')
      .should('contain.text', 'Using Signals');
  });
});
