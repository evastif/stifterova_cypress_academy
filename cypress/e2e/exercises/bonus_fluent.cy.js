import { HomePageStore } from "../../page_objects/atomation_store/home_page_store";

describe("Automation store fluent", () => {
  it("Buy bronzer", () => {
    new HomePageStore().openHomePage().clickBronzerItem();
    cy.get(".cart").click();
  });
});
