import { faker } from "@faker-js/faker";

describe("API Exercise", () => {
  it("Register and Login via API", () => {
    const username = faker.internet.username();
    const password = faker.internet.password({ length: 20 });
    const email = faker.internet.exampleEmail();

    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username,
        password,
        email: email, // ? pokud má property stejný název jako hodnota (například: email: email), stačí zadat jen email viz výše property username, password
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });

    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username,
        password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

/*
Cvičení ⌛10:00:
Vytvořte test, který provolá registraci a následně se pomocí LoginAPI přihlásí. 
Složka: cypress/e2e/exercises
Test: api_exercise.cy.js

Login API údaje:
metoda: POST
url: http://localhost:3000/auth/login
body: 
{
   “username”: “uživatelské jméno”,
   “password”: “heslo”
}

*/
