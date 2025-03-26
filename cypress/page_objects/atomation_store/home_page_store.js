export class HomePageStore {
  constructor() {
    this.homePageStoreUrl = "https://automationteststore.com/";
  }

  openHomePage() {
    cy.visit(this.homePageStoreUrl);
    return this;
  }
}
