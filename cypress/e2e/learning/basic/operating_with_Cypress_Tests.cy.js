// Všechny testy musí být ve složce cypress/e2e

describe("Operating with Cypress Tests", () => {
  it("Login Tests", () => {
    cy.visit("https://tredgate.com/pmtool"); // Otevře webovou stránku
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });
});
