/*Otevře stránku přes cy.visit: https://tredgate.com/webtrain/registration.html
Vyplní všechna textová pole mimo datum narození(používej proměnné pro uložení dat)
Klikne na tlačítko Submit
Hotovou práci napushuj do Github a vytvoř Pull Request na Petra*/

describe("Simple registration test", () => {
  const Name = "Petr Novák";
  const email = "petr.novak@tredgate.com";
  const password = "heslo";
  const confirmPassword = "heslo";
  const address = "Hlavní 137, 11000 Praha";

  it("Registration", () => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
    cy.get("#name").type(Name);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#confirm-password").type(confirmPassword);
    cy.get("#address").type(address);
    cy.get("button").click();
    cy.get("#message-box").should("have.text", "Form submitted successfully!");
  });
});
