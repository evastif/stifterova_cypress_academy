import { LoginPage } from "../../page_objects/pmtool/login_page";
import { LostPasswordPage } from "../../page_objects/pmtool/lost_password_page";

describe("Lost password test", () => {
  it("Lost password send", () => {
    new LoginPage().openPmtool().clickForgetPassword();
    new LostPasswordPage()
      .typeUsername("lost_password_user")
      .typeEmail("lost_password@tredgate.cz")
      .clickSandButton();
  });

  it("Lost password back", () => {
    new LoginPage().openPmtool().clickForgetPassword();
    new LostPasswordPage().clickBackButton();
  });
});
