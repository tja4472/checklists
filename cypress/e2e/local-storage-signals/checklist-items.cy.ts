import {
  addedItem_CheckText,
  addedItem_Delete,
  addedItem_Edit,
  addedItem_Toggle,
  addItem_CheckTextNoItems,
  addItem_Close,
  addItem_Save,
  backLink,
  checkTextNoItems,
} from '../shared-tests/checklist-items';

describe('Local storage signals checklist items', () => {
  //
  beforeEach(() => {
    cy.visit('/');
    cy.getBySel('local-storage_signals-link').click();
    cy.getBySel('add-checklist-button').click();
    cy.getBySel('modal-input').type('AAA');
    cy.getBySel('save-checklist-button').click();
    cy.getBySel('checklist-link').click();
  });

  it('Location', () => {
    //
    cy.location('pathname').should(
      'eq',
      '/local-storage/signals/checklist/aaa'
    );
  });

  it('Check text with no items', () => {
    //
    cy.getBySel('welcome')
      .should('be.visible')
      .should('contain.text', 'Welcome to Checklists!');
    cy.getBySel('header')
      .should('be.visible')
      .should('contain.text', 'Quicklists: Local Storage Using Signals');

    // This below is shared
    checkTextNoItems();
  });

  it('Back link', () => {
    //
    backLink('/local-storage/signals');
  });

  describe('Add checklist item', () => {
    //
    beforeEach(() => {
      cy.getBySel('create-checklist-item-button').click();
    });

    it('check text', () => {
      //
      addItem_CheckTextNoItems();
    });

    it('close', () => {
      //
      addItem_Close();
      checkTextNoItems();
    });

    describe('Added checklist item', () => {
      //
      beforeEach(() => {
        addItem_Save();
      });

      it('Check text', () => {
        //
        addedItem_CheckText();
      });

      it('Toggle', () => {
        //
        addedItem_Toggle();
      });

      it('Edit', () => {
        //
        addedItem_Edit();
      });

      it('Delete', () => {
        //
        addedItem_Delete();
        checkTextNoItems();
      });
    });
  });
});
