import { DashboardPage } from "../../page_objects/pmtool/dashboard_page";
import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Login logout test", () => {
  it("Login to pmtool", () => {
    const pmtool = new LoginPage();
    pmtool.openPmtool();
    pmtool.typeUsername("cypress_zima_2024");
    pmtool.typePassword("Zima2024Cypress");
    pmtool.clickLogin();
  });
  it.only("Pmtool Login and Logout test", () => {
    const login_page = new LoginPage();
    const Logout = new DashboardPage();
    login_page.openPmtool();
    login_page.login("cypress_zima_2024", "Zima2024Cypress");
    Logout.clickUserDrop();
    Logout.clickLogout();
  });
});

/*describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });
});
*/
