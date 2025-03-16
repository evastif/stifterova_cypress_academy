import { HeaderSection } from "./common/header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.projectsMenuAnchor = "#Projects a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  clickProjects() {
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }
}
