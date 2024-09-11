export function checkTextNoItems() {
  //
  cy.getBySel('back-button')
    .should('be.visible')
    .should('contain.text', 'Back');
  cy.getBySel('checklist-title')
    .should('be.visible')
    .should('contain.text', 'AAA');
  cy.getBySel('reset-items-button')
    .should('be.visible')
    .should('contain.text', 'Reset');
  cy.getBySel('create-checklist-item-button')
    .should('be.visible')
    .should('contain.text', 'Add item');
  cy.getBySel('empty-header')
    .should('be.visible')
    .should('contain.text', 'Add an item');
  cy.getBySel('no-checklist-items-message')
    .should('be.visible')
    .should(
      'contain.text',
      'Click the add button to add your first item to this quicklist'
    );
}

export function backLink(pathname: string) {
  //
  cy.getBySel('back-button').click();
  // cy.location('pathname').should('eq', '/local-storage/signals');
  cy.location('pathname').should('eq', pathname);
}

export function addItem_CheckTextNoItems() {
  //
  cy.getBySel('modal-header')
    .should('be.visible')
    .should('contain.text', 'Create item');
  cy.getBySel('modal-close-button')
    .should('be.visible')
    .should('contain.text', 'close');
  cy.getBySel('modal-label')
    .should('be.visible')
    .should('contain.text', 'title');
  cy.getBySel('modal-input').should('be.visible').should('have.value', '');
  cy.getBySel('save-checklist-button')
    .should('be.visible')
    .should('contain.text', 'Save');
}

export function addItem_Close() {
  //
  cy.getBySel('modal-input').type('BBB');
  cy.getBySel('modal-close-button').click();
}

export function addItem_Save() {
  //
  cy.getBySel('modal-input').type('BBB');
  cy.getBySel('save-checklist-button').click();
  //
  cy.getBySel('modal-header').should('not.exist');
  cy.getBySel('no-checklists-message').should('not.exist');
}

export function addedItem_CheckText() {
  //
  cy.getBySel('checklist-item').should('have.length', 1);
  cy.getBySel('title').should('be.visible').should('contain.text', 'BBB');
  cy.getBySel('toggle-checklist-item-button')
    .should('be.visible')
    .should('contain.text', 'Toggle');
  cy.getBySel('edit-checklist-item-button')
    .should('be.visible')
    .should('contain.text', 'Edit');
  cy.getBySel('delete-checklist-item-button')
    .should('be.visible')
    .should('contain.text', 'Delete');
  cy.getBySel('checked-indicator').should('not.exist');
}

export function addedItem_Toggle() {
  //
  cy.getBySel('toggle-checklist-item-button').click();
  cy.getBySel('checked-indicator').should('be.visible');
  cy.getBySel('toggle-checklist-item-button').click();
  cy.getBySel('checked-indicator').should('not.exist');
}

export function addedItem_Edit() {
  //
  cy.getBySel('edit-checklist-item-button').click();
  //
  cy.getBySel('modal-header')
    .should('be.visible')
    .should('contain.text', 'Create item');
  cy.getBySel('modal-close-button')
    .should('be.visible')
    .should('contain.text', 'close');
  cy.getBySel('modal-label')
    .should('be.visible')
    .should('contain.text', 'title');
  cy.getBySel('modal-input').should('be.visible').should('have.value', 'BBB');
  cy.getBySel('save-checklist-button')
    .should('be.visible')
    .should('contain.text', 'Save');
  //
  cy.getBySel('modal-input').type('{backspace}CCC');
  cy.getBySel('save-checklist-button').click();
  cy.getBySel('checklist-item').should('have.length', 1);
  cy.getBySel('title').should('be.visible').should('contain.text', 'BBCCC');
}

export function addedItem_Delete() {
  //
  cy.getBySel('delete-checklist-item-button').click();
}
