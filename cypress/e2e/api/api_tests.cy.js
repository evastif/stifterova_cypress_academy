describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.intercept("/auth/login");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
  });

  it("Wait for login", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
  });
});
