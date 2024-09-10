export function initialLanding() {
  //
  cy.getBySel('home-href').should('be.visible').should('contain.text', 'Home');
  cy.getBySel('add-checklist-button')
    .should('be.visible')
    .should('contain.text', 'Add Checklist');
  cy.getBySel('checklists-header')
    .should('be.visible')
    .should('contain.text', 'Your checklists');
  cy.getBySel('checklist-item').should('not.exist');
  cy.getBySel('no-checklists-message')
    .should('be.visible')
    .should(
      'contain.text',
      'Click the add button to create your first checklist!'
    );
  cy.getBySel('modal-header').should('not.exist');
}

export function homeLink() {
  //
  cy.getBySel('home-href').click();
  cy.location('pathname').should('eq', '/');
}

function addChecklist_CheckText() {
  //
  // TODO: Should the click be here?
  cy.getBySel('add-checklist-button').click();
  //
  cy.getBySel('modal-header')
    .should('be.visible')
    .should('contain.text', 'Add Checklist');
  cy.getBySel('modal-close-button')
    .should('be.visible')
    .should('contain.text', 'close');
  cy.getBySel('modal-label')
    .should('be.visible')
    .should('contain.text', 'title');
  cy.getBySel('modal-input').should('be.visible').should('have.text', '');
  cy.getBySel('save-checklist-button')
    .should('be.visible')
    .should('contain.text', 'Save');
}

export function addChecklistClose() {
  //
  addChecklist_CheckText();
  //
  cy.getBySel('modal-input').type('AAA');
  cy.getBySel('modal-close-button').click();
  initialLanding();
}

export function addChecklist_Save() {
  //
  addChecklist_CheckText();
  //
  cy.getBySel('modal-input').type('AAA');
  cy.getBySel('save-checklist-button').click();
  //
  cy.getBySel('modal-header').should('not.exist');
  cy.getBySel('no-checklists-message').should('not.exist');

  // checklist item
  cy.getBySel('checklist-item').should('have.length', 1);
  cy.getBySel('checklist-link')
    .should('be.visible')
    .should('contain.text', 'AAA');
  cy.getBySel('edit-checklist')
    .should('be.visible')
    .should('contain.text', 'Edit');
  cy.getBySel('delete-checklist')
    .should('be.visible')
    .should('contain.text', 'Delete');
}

export function editChecklist_Close() {
  //
  // Setup
  cy.getBySel('add-checklist-button').click();
  cy.getBySel('modal-input').type('AAA');
  cy.getBySel('save-checklist-button').click();
  // Test
  cy.getBySel('edit-checklist').click();
  cy.getBySel('modal-header')
    .should('be.visible')
    .should('contain.text', 'AAA');
  cy.getBySel('modal-input').should('be.visible').should('have.value', 'AAA');
  cy.getBySel('modal-input').type('{backspace}BBB');
  cy.getBySel('modal-close-button').click();
  cy.getBySel('modal-header').should('not.exist');
  cy.getBySel('checklist-item').should('have.length', 1);
  cy.getBySel('checklist-link')
    .should('be.visible')
    .should('contain.text', 'AAA');
}

export function editChecklist_Save() {
  //
  // Setup
  cy.getBySel('add-checklist-button').click();
  cy.getBySel('modal-input').type('AAA');
  cy.getBySel('save-checklist-button').click();
  // Test
  cy.getBySel('edit-checklist').click();
  cy.getBySel('modal-header')
    .should('be.visible')
    .should('contain.text', 'AAA');
  cy.getBySel('modal-input').should('be.visible').should('have.value', 'AAA');
  cy.getBySel('modal-input').type('BBB');
  cy.getBySel('save-checklist-button').click();
  cy.getBySel('modal-header').should('not.exist');
  cy.getBySel('checklist-item').should('have.length', 1);
  cy.getBySel('checklist-link')
    .should('be.visible')
    .should('contain.text', 'AAABBB');
}

export function deleteChecklist() {
  //
  // Setup
  cy.getBySel('add-checklist-button').click();
  cy.getBySel('modal-input').type('AAA');
  cy.getBySel('save-checklist-button').click();
  // Test
  cy.getBySel('delete-checklist').click();
  cy.getBySel('checklist-item').should('not.exist');
  cy.getBySel('no-checklists-message')
    .should('be.visible')
    .should(
      'contain.text',
      'Click the add button to create your first checklist!'
    );
  cy.getBySel('modal-header').should('not.exist');
}

export function selectChecklist() {
  //
  // Setup
  cy.getBySel('add-checklist-button').click();
  cy.getBySel('modal-input').type('AAA');
  cy.getBySel('save-checklist-button').click();
  // Test
  cy.getBySel('checklist-link').click();
  //cy.location('pathname').should('eq', '/local-storage/signals/checklist/aaa');
}
