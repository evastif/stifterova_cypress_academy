export class DashboardPage {
  constructor() {
    this.dropdownButton = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickUserDrop() {
    cy.get(this.dropdownButton).click();
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
  }
}
