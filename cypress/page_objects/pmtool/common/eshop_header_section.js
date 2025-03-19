export class EshopHeaderSection {
  constructor() {
    this.EshopLogoAnchor = "img[title='Tredgate Obchod']";
  }

  clickEshopLogo() {
    cy.get(this.EshopLogoAnchor).click();
    return this;
  }
}
