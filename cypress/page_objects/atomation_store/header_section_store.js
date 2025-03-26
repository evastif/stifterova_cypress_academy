export class HeaderSectionStore {
  constructor() {
    this.loginRegisterButton = "#customer_menu_top > li > a";
  }

  clickLogRegButton() {
    cy.get(this.loginRegisterButton).click();
    return this;
  }
}
