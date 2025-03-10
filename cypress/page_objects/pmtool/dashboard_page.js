import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    /*this.dropdownButton = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickUserDrop() {
    cy.get(this.dropdownButton).click();     TOTO NAHRADÍ HEADER SECTION
    return this;
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();*/
  }
    clickProfile() {
    cy.get(this.profileButton).click();
    return this;
}
