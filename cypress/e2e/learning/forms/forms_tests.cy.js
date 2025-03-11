describe("Form test", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get("input[name='subscription']").check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check and uncheck two interests", () => {
    cy.get("input[name='interests[]']").check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get("input[name='interests[]']").check("reading");
    cy.get("#interests-reading").should("be.checked");
    cy.get("input[name='interests[]']").uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
    cy.get("input[name='interests[]']").uncheck("reading");
    cy.get("#interests-reading").should("not.be.checked");

    cy.get("input[name='interests[]']").check(["sports", "reading", "music"]);
  });

  it("Clear and fill name", () => {
    cy.get("#name").clear().type("Eva");
    cy.get("#name").should("have.value", "Eva");
  });

  it("Select", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("form").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!");
  });

  it("Upload file fixtures", () => {
    cy.fixture("test.txt", { encoding: null }).as("uploadFile");
    cy.get("input[type='file']").selectFile("@uploadFile");
  });

  it("Date", () => {
    cy.get("#datepicker").type("1981-09-05");
    cy.get("#datepicker").should("have.value", "1981-09-05");
  });
});
