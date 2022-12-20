/// <reference types="cypress" />
// @ts-check
const adminUsername = "admin";
const adminPassword = "admin";

describe("Given a login for for the user to login", () => {
  describe("When the user logs in with username and password `admin`", () => {
    it("Then it should show a list of users, where one of them is named `Bret`", () => {
      cy.visit("http://localhost:3000/");

      cy.get('[placeholder="Username"]').type(adminUsername);
      cy.get('[placeholder="Password"]').type(adminPassword);

      cy.get(".login-register-button").click();

      cy.get(":nth-child(1) > .post > .post__author").contains("Bret");
    });
  });
});

describe("Given a Detail page", () => {
  describe("When the user clicks on the edit button", () => {
    it("Then it should render a button with the text `Edit`", () => {
      cy.visit("http://localhost:3000/");

      cy.get('[placeholder="Username"]').type(adminUsername);
      cy.get('[placeholder="Password"]').type(adminPassword);

      cy.get(".login-register-button").click();

      cy.get(":nth-child(1) > .post").click();

      cy.get(".detail-page__body__button").click();

      cy.get(".login-register-button").contains("Edit");
    });
  });

  describe("When te user clicks on the edit button and types the title `New tested post`", () => {
    it("Then it should render a heading with the text `New tested post`", () => {
      const titleToType = "New tested post";
      const expectedNewTitle = "New tested post";

      cy.visit("http://localhost:3000/");

      cy.get('[placeholder="Username"]').type(adminUsername);
      cy.get('[placeholder="Password"]').type(adminPassword);

      cy.get(".login-register-button").click();

      cy.get(":nth-child(1) > .post").click();

      cy.get(".detail-page__body__button").click();

      cy.get(".login-register-button").contains("Edit");

      const titleInput = cy.get("#title");

      titleInput.clear().type(titleToType);

      titleInput.contains(expectedNewTitle);
    });
  });
});
