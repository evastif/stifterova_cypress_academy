import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "[type='submit']";
    this.forgetPasswordButton = "#forget_password";
    this.remeberMeCheckbox = ".checkbox";
    this.logoTEG = 'img[title="TEG Project Management"]';
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  clickForgetPassword() {
    cy.get(this.forgetPasswordButton).click();
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  getRememberMeText() {
    cy.get(this.remeberMeCheckbox).check();
    return this;
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  controlPasswordPlaceholder() {
    cy.get(this.passwordInput).should("have.attr", "placeholder", "Password");
    return this;
  }

  controlUsernamePlaceholder() {
    cy.get(this.usernameInput).should("have.attr", "placeholder", "Username");
    return this;
  }

  controlCheckboxContainsRememberMe() {
    cy.get(this.remeberMeCheckbox).should("contain.text", "Remember Me");
    return this;
  }

  controlLoginButtonHaveText() {
    cy.get(this.loginButton).should("have.text", "Login");
    return this;
  }

  controlTextCheckboxForgetPassword() {
    cy.get(this.forgetPasswordButton).should(
      "have.text",
      "Password forgotten?"
    );
    return this;
  }

  controlVisibleLogo() {
    cy.get(this.logoTEG).should("be.visible");
    return this;
  }
}
