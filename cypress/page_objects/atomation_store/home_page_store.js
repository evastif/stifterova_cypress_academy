import { HeaderSectionStore } from "./header_section_store";

export class HomePageStore {
  constructor() {
    this.homePageStoreUrl = "https://automationteststore.com/";
    this.bronzerItem =
      "section[id='featured'] div[class='thumbnails list-inline'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)";
  }

  openHomePage() {
    cy.visit(this.homePageStoreUrl);
    return this;
  }

  clickBronzerItem() {
    cy.get(this.bronzerItem).click();
    return this;
  }
}
