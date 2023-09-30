export default class GoogleSearchPage {
    // Elementos web
    static searchInput() {
        return cy.get("#APjFqb");
    }

    static searchResults() {
        return cy.get("span.VuuXrf");
    }

    static bodyPage() {
        return cy.get("body");
    }

    // Métodos para interactuar con la página
    static visit() {
        cy.visit("https://www.google.com");
        cy.acceptCookies();
    }

    static searchFor(criteria) {
        this.searchInput().type(criteria).type("{enter}");
    }

    static clickSearchResult(pageLink) {
        this.searchResults().contains(pageLink).click();
    }

    static assertOnPage(web) {
        cy.url().should("include", web);
    }

    static assertTextOnPage(validateText) {
        this.bodyPage().contains(validateText).screenshot({ capture: 'viewport', overwrite: true });
    }
}