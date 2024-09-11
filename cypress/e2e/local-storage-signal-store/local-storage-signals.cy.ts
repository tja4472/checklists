import {
  initialLanding,
  homeLink,
  addChecklistClose,
  addChecklist_Save,
  editChecklist_Close,
  editChecklist_Save,
  deleteChecklist,
  selectChecklist,
} from '../shared-tests/test-checklists';

describe('Local storage signals', () => {
  //
  beforeEach(() => {
    cy.visit('/');
    cy.getBySel('local-storage-signal-store').click();
  });

  it('Inital landing', () => {
    //
    cy.location('pathname').should('eq', '/local-storage/signal-store');
    cy.getBySel('welcome')
      .should('be.visible')
      .should('contain.text', 'Welcome to Checklists!');
    cy.getBySel('header')
      .should('be.visible')
      .should('contain.text', 'Quicklists: Local Storage Using SignalStore');
    // This below is shared
    initialLanding();
  });

  it('Home link', () => {
    //
    homeLink();
  });

  // Add checklist: close
  // Add checklist: save

  // Edit checklist: close
  // Edit checklist: save

  // Delete checklist
  // Select checklist

  it('Checklists', () => {
    //
    cy.getBySel('welcome')
      .should('be.visible')
      .should('contain.text', 'Welcome to Checklists!');
    cy.getBySel('header')
      .should('be.visible')
      .should('contain.text', 'Quicklists: Local Storage Using SignalStore');
  });

  it('Add checklist: close', () => {
    //
    addChecklistClose();
  });

  it('Add checklist: save', () => {
    //
    addChecklist_Save();
  });

  it('Edit checklist: close', () => {
    //
    editChecklist_Close();
  });

  it('Edit checklist: save', () => {
    //
    editChecklist_Save();
  });

  it('Delete checklist', () => {
    //
    deleteChecklist();
  });

  it('Select checklist', () => {
    //
    selectChecklist();
    cy.location('pathname').should(
      'eq',
      '/local-storage/signal-store/checklist/aaa'
    );
  });
});
