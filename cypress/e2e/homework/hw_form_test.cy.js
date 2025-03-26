import { HomePageStore } from "../../page_objects/atomation_store/home_page_store";
import { HeaderSectionStore } from "../../page_objects/atomation_store/header_section_store";
import { RegistrLoginPage } from "../../page_objects/atomation_store/register_login_page";
import { RegisterPage } from "../../page_objects/atomation_store/register_page";

describe("Automation Test Store form", () => {
  it("Fill register form", () => {
    new HomePageStore().openHomePage();
    new HeaderSectionStore().clickLogRegButton();
    new RegistrLoginPage().clickRegisterAcount();
    new RegisterPage()
      .typeGeneratedFirstName()
      .typeGeneratedLastName()
      .typeGeneratedEmail()
      .typePhone()
      .typeFax()
      .typeCompany()
      .typeAddress()
      .typeCity()
      .typePostcode()
      .typeCountry()
      .getWait()
      .selectZone()
      .typeLoginName()
      .typePassword()
      .typeConfirmPassword()
      .getNewsleter()
      .getAgree()
      .clickSendButton()
      .getConfirmText();
  });
});
