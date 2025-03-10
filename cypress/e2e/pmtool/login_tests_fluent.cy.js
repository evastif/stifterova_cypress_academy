import { DashboardPage } from "../../page_objects/pmtool/dashboard_page";
import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    new DashboardPage().clickProfile().clickLogout();
  });

  it("Login and Logout test", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    new DashboardPage().clickProfile().clickLogout();
  });
});
