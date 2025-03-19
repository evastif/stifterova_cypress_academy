import { EshopHeaderSection } from "../pmtool/common/eshop_header_section";

export class HomePage extends EshopHeaderSection {
  constructor() {
    super();
    this.eshoplUrl = "https://tredgate.com/eshop/";
    this.dropdownToggle = ".caret";
    this.dropdownmenu =
      "li[class='dropdown open'] li:nth-child(1) a:nth-child(1)";
    this.itemIphone = "img[title='iPhone']";
  }

  openEshop() {
    cy.visit(this.eshoplUrl);
    return this;
  }

  clickAccount() {
    cy.get(this.dropdownToggle).click();
  }

  clickRegistration() {
    cy.get(this.dropdownmenu).click();
  }

  clickItemIphone() {
    cy.get(this.itemIphone).click();
    return "https://tredgate.com/eshop/index.php?route=product/product&product_id=40";
  }
}
