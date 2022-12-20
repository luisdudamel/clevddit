/// <reference types="cypress" />
// @ts-check

describe("Given a login for for the user to login", () => {
  describe("When the user logs in with username and password `admin`", () => {
    it("Then it should show a list of users, where one of them is named `Bret`", () => {
      const adminUsername = "admin";
      const adminPassword = "admin";

      cy.visit("http://localhost:3000/");

      cy.get('[placeholder="Username"]').type(adminUsername);
      cy.get('[placeholder="Password"]').type(adminPassword);

      cy.get(".login-register-button").click();

      cy.get(":nth-child(1) > .post > .post__author").contains("Bret");
    });
  });
});
