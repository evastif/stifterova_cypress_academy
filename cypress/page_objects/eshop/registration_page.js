export class RegistrationPage {
  constructor() {
    this.registrationPage =
      "https://tredgate.com/eshop/index.php?route=account/register";
    this.firstnameInput = "#input-firstname";
    this.lastnameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.confirmInput = "#input-confirm";
    this.confirmButton = ".pull-right > .btn";
  }
  openRegistrationPage() {
    cy.visit(this.registrationPage);
  }

  typeFirstName(firstname) {
    cy.get(this.firstnameInput).type(firstname);
  }
  typeSecondName(lastname) {
    cy.get(this.lastnameInput).type(lastname);
  }
  typeEmail(email) {
    cy.get(this.emailInput).type(email);
  }
  typePhone(phone) {
    cy.get(this.telephoneInput).type(phone);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  typeConfirm(confirm) {
    cy.get(this.confirmInput).type(confirm);
  }

  clickConfirm() {
    cy.get(this.confirmButton).click();
  }

  login(firstname, lastname, email, phone, password, confirm) {
    this.typeFirstName(firstname);
    this.typeSecondName(lastname);
    this.typeEmail(email);
    this.typePhone(phone);
    this.typePassword(password);
    this.typeConfirm(confirm);
  }
}
