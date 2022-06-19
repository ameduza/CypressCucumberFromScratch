import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { siteName } from "./helpers/siteEnum";

let siteContext: string;

Given(`I am on {string} search page`, (pageName: string) => {
  switch (pageName.toLowerCase()) {
    case "google":
      cy.visit("https://google.com");
      siteContext = siteName.Google;
      break;
    case "wikipedia":
      cy.visit("https://wikipedia.org");
      siteContext = siteName.Wikipedia;
      break;
    default:
      throw new Error("unknown site, pageName: " + pageName);
  }
});

When("I search {string} term", (searchField) => {
  searchTerm(searchField);
});

Then("title should contain {string}", (expectedTitleSubstring) => {
  cy.log("Then section");
  cy.title().should("include", expectedTitleSubstring);
});

Then("article header should be {string}", () => {});

function searchTerm(term: string) {
  if (siteContext == siteName.Google) {
    cy.findByRole("combobox", { class: ".gLFyf" }).type(term + "{enter}");
  }
  if (siteContext == siteName.Wikipedia) {
    cy.get("#searchInput").type(term + "{enter}");
  }
}
