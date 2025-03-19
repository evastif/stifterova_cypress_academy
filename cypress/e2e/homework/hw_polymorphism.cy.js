import { HomePage } from "../../page_objects/eshop/home_page";

describe("Control Eshop Item", () => {
  it("Open eshop and iphone item", () => {
    new HomePage().openEshop().clickItemIphone();
    cy.get(".intro").should(
      "contain.text",
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email."
    );
    new HomePage().clickEshopLogo();
  });
});
