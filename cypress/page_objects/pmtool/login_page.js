import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "[type='submit']";
    this.forgetPasswordButton = "#forget_password";
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

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }
}

/*export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "[type='submit']";
  }

  openPmtool() {
    cy.visit(this.url);
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}
*/
