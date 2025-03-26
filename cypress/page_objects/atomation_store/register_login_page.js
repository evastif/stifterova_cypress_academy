import { RegisterPage } from "./register_page";

export class RegistrLoginPage {
  constructor() {
    this.registerAcount = "button[title='Continue']";
  }

  clickRegisterAcount() {
    cy.get(this.registerAcount).click();
    return new RegisterPage();
  }
}
