import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import GoogleSearchPage from "../../pages/GoogleSearchPage";

Given('the user opens the Google homepage', () => {
    GoogleSearchPage.visit();
});

When("the user searches for {string}", (criteria) => {
    GoogleSearchPage.searchFor(criteria);
});

When("the user clicks on the {string} link in the search results", (pageLink) => {
    GoogleSearchPage.clickSearchResult(pageLink);
});

Then("the user should be on the {string} page", (web) => {
    GoogleSearchPage.assertOnPage(web);
});

Then("the user should find the text {string} on the page", (validateText) => {
    GoogleSearchPage.assertTextOnPage(validateText);
});