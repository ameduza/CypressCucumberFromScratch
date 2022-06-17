import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I am on Google search page`, () =>{
    cy.visit('https://google.com');
});

When('I type {string} in the search field', (searchField) =>{
    cy.findByRole('combobox', {class: '.gLFyf'})
        .type(searchField + '{enter}')
    
});

Then('it should be ok', () =>{
    cy.log("Then section");
    cy.title().should("include", "Cypress");

});

