import { LoginPage } from "../../../page_objects/pmtool/login_page";

describe("Mocha tests", () => {
  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Pmtool login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("username")
      .typePassword("password")
      .clickLogin();
  });

  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("runs before every test");
  });

  afterEach(() => {
    cy.log("Function afterEach called");
  });
});
