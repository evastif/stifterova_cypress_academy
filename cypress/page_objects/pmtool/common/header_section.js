export class HeaderSection {
  constructor() {
    this.dropdownButton = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickUserDrop() {
    cy.get(this.dropdownButton).click();
    return this;
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
