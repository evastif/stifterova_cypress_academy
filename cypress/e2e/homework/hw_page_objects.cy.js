import { HomePage } from "../../page_objects/eshop/home_page";
import { RegistrationPage } from "../../page_objects/eshop/registration_page";

describe("HW page objects", () => {
  it("Home Page", () => {
    const eshop = new HomePage();
    eshop.openEshop();
    eshop.clickAccount();
    eshop.clickRegistration();
  });
  it("Registration Page", () => {
    const registration = new RegistrationPage();
    registration.openRegistrationPage();
    registration.typeFirstName("Eva");
    registration.typeSecondName("Štifterová");
    registration.typeEmail("stifterova.eva+1@gmail.com");
    registration.typePhone("777777777");
    registration.typePassword("heslo");
    registration.typeConfirm("heslo");
    registration.clickConfirm();
  });
});
it("Tento test se ukončí bez chyby", function () {
  this.skip();
  cy.get("#input-firstname").type("Eva");
});
