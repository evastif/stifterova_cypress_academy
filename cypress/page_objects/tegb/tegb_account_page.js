import { customElement } from "../../helpers/custom_element";

export class AccountsPage {
  constructor() {
    this.pageTitle = customElement('h1[data-testid="title"]');
  }

  titleHaveText(titleText) {
    this.pageTitle.haveText(titleText);
    return this;
  }
}
