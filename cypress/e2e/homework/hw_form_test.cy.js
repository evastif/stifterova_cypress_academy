import { faker } from "@faker-js/faker";
import { HomePageStore } from "../../page_objects/atomation_store/home_page_store";
import { HeaderSectionStore } from "../../page_objects/atomation_store/header_section_store";
import { RegistrLoginPage } from "../../page_objects/atomation_store/register_login_page";

describe("Automation Test Store form", () => {
  it("Generate email faker", () => {
    const generatedEmail = faker.internet.exampleEmail();
    cy.log(`Generated test data: email: ${generatedEmail}`);
    const Login = faker.internet.username();
    cy.log(Login);
    const generatedPassword = faker.internet.password();
    cy.log(generatedPassword);
    new HomePageStore().openHomePage();
    new HeaderSectionStore().clickLogRegButton();
    new RegistrLoginPage().clickRegisterAcount();
    cy.get("#AccountFrm_firstname").type("Eva");
    cy.get("#AccountFrm_lastname").type("Malá");
    cy.get("#AccountFrm_email").type(generatedEmail);
    cy.get("#AccountFrm_telephone").type("777777777");
    cy.get("#AccountFrm_fax").type("777777777");
    cy.get("#AccountFrm_company").type("Malá s.r.o.");
    cy.get("#AccountFrm_address_1").type("Krátká 22");
    cy.get("#AccountFrm_city").type("Dlouhá Ves");
    cy.get("#AccountFrm_postcode").type("36000");
    cy.get("#AccountFrm_country_id").select("Czech Republic");
    cy.wait(1000);
    cy.get("#AccountFrm_zone_id").select("Vysocina");
    cy.get("#AccountFrm_loginname").type(Login);
    cy.get("#AccountFrm_password").type(generatedPassword);
    cy.get("#AccountFrm_confirm").type(generatedPassword);
    cy.get('[for="AccountFrm_newsletter1"]').click();
    cy.get("#AccountFrm_agree").click();
    cy.get(".col-md-2 > .btn").click();
    cy.get(".maintext").should(
      "contains.text",
      "Your Account Has Been Created!"
    );
  });
});
