import { faker } from "@faker-js/faker";

export class RegisterPage {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.exampleEmail();
    this.password = faker.internet.password();
    this.confirmPassword = "#AccountFrm_confirm";

    this.phone = "#AccountFrm_telephone";
    this.fax = "#AccountFrm_fax";
    this.company = "#AccountFrm_company";
    this.address = "#AccountFrm_address_1";
    this.city = "#AccountFrm_city";
    this.postecode = "#AccountFrm_postcode";
    this.country = "#AccountFrm_country_id";
    this.zone = "#AccountFrm_zone_id";
    this.loginName = "#AccountFrm_loginname";
    this.newsletter = '[for="AccountFrm_newsletter1"]';
    this.accountAgree = "#AccountFrm_agree";
    this.sendButton = ".col-md-2 > .btn";
    this.confirmText = ".maintext";
  }

  typeGeneratedFirstName() {
    cy.get("#AccountFrm_firstname").type(this.firstName);
    return this;
  }

  typeGeneratedLastName() {
    cy.get("#AccountFrm_lastname").type(this.lastName);
    return this;
  }

  typeGeneratedEmail() {
    cy.get("#AccountFrm_email").type(this.email);
    return this;
  }

  typePhone() {
    cy.get(this.phone).type(777777777);
    return this;
  }

  typeFax() {
    cy.get(this.fax).type(777777777);
    return this;
  }

  typeCompany() {
    cy.get(this.company).type("Malá s.r.o.");
    return this;
  }

  typeAddress() {
    cy.get(this.address).type("Krátká 22");
    return this;
  }

  typeCity() {
    cy.get(this.city).type("Dlouhá Ves");
    return this;
  }

  typePostcode() {
    cy.get(this.postecode).type("36000");
    return this;
  }

  typeCountry() {
    cy.get(this.country).select("Czech Republic");
    return this;
  }

  getWait() {
    cy.wait(1000);
    return this;
  }

  selectZone() {
    cy.get(this.zone).select("Vysocina");
    return this;
  }

  typeLoginName() {
    cy.get(this.loginName).type(this.firstName + this.lastName);
    return this;
  }

  typePassword() {
    cy.get("#AccountFrm_password").type(this.password);
    return this;
  }

  typeConfirmPassword() {
    cy.get("#AccountFrm_confirm").type(this.password);
    return this;
  }

  getNewsleter() {
    cy.get(this.newsletter).click();
    return this;
  }

  getAgree() {
    cy.get(this.accountAgree).click();
    return this;
  }

  clickSendButton() {
    cy.get(this.sendButton).click();
    return this;
  }

  getConfirmText() {
    cy.get(".maintext").should(
      "contains.text",
      "Your Account Has Been Created!"
    );
  }
}
