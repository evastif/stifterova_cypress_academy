import { LoginPage } from "../../../../../../page_objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login header has text 'Login'", () => {
    cy.get(".form-title").should("have.text", "Login");
  });

  it.skip("FAILING: Login header has text 'Login2'", () => {
    cy.get(".form-title").should("have.text", "Login2");
  });

  it("Lost password link has text 'Password forgotten?'", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });
});
