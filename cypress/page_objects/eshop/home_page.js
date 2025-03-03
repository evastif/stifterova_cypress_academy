export class HomePage {
  constructor() {
    this.eshoplUrl = "https://tredgate.com/eshop/";
    this.dropdownToggle = ".caret";
    this.dropdownmenu =
      "li[class='dropdown open'] li:nth-child(1) a:nth-child(1)";
  }

  openEshop() {
    cy.visit(this.eshoplUrl);
  }
  clickAccount() {
    cy.get(this.dropdownToggle).click();
  }
  clickRegistration() {
    cy.get(this.dropdownmenu).click();
  }
}
