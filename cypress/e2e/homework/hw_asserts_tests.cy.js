import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Login Page Tests with Asserts", () => {
  it("Control login page with Assert", () => {
    new LoginPage()
      .openPmtool()
      .controlUsernamePlaceholder()
      .controlPasswordPlaceholder()
      .controlCheckboxContainsRememberMe()
      .controlLoginButtonHaveText()
      .controlTextCheckboxForgetPassword()
      .controlVisibleLogo();
  });
});
