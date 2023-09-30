import {
    Given,
    When,
    And,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

Given('the user opens the Google homepage', () => {
    cy.visit("https://www.google.com")
    cy.acceptCookies()
});

When("the user searches for {string}", (searchTerm) => {
    cy.get("#APjFqb").type(searchTerm).type("{enter}");
});

When("the user clicks on the {string} link in the search results", (searchTerm) => {
    cy.get("span.VuuXrf").contains(searchTerm).click();
});

Then("the user should be on the {string} page", (searchTerm) => {
    cy.url().should("include", searchTerm);
});

Then("the user should find the text {string} on the page", (validateText) => {
    cy.get("body").contains(validateText).screenshot({ capture: 'viewport', overwrite: true });
});