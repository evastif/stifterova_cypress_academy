import { LoginPage } from "./login_page";
export class LostPasswordPage {
  constructor() {
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.sendButton = "[type='submit']";
    this.backButton = "#back-btn > .fa";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  clickForgetPasswordButton() {
    cy.get(this.forgetPasswordButton).click;
    return new LostPasswordPage();
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickSandButton() {
    cy.get(this.sendButton).click();
    return new LoginPage();
  }

  clickBackButton() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }
}
