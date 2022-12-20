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

describe("Given a Hamburger menu", () => {
  describe("When the user clicks on the link with the text `Users`", () => {
    it("Then it should render a list of users where one is named `Samantha`", () => {
      cy.visit("http://localhost:3000/");
      cy.viewport("iphone-x");

      cy.get('[placeholder="Username"]').type(adminUsername);
      cy.get('[placeholder="Password"]').type(adminPassword);

      cy.get(".login-register-button").click();

      cy.get("#hamburger-menu").click();

      cy.get(".hamburger__navlink-container > .navlink").click();

      cy.get(":nth-child(3) > .user > .user__username").contains("Samantha");
    });

    describe("And the user clicks on the hamburger menu and then clicks on the button with the text `Logout`", () => {
      it("Then it should render a form with username and password fields.", () => {
        const expectedLogoutText = "Logout";

        cy.visit("http://localhost:3000/");
        cy.viewport("iphone-x");

        cy.get('[placeholder="Username"]').type(adminUsername);
        cy.get('[placeholder="Password"]').type(adminPassword);

        cy.get(".login-register-button").click();

        cy.get("#hamburger-menu").click();

        cy.get(".logout__text--hamburger").contains(expectedLogoutText).click();

        cy.get('[placeholder="Username"]').type(adminUsername);
        cy.get('[placeholder="Password"]').type(adminPassword);
      });
    });
  });
});

describe("Given a Homepage page", () => {
  describe("When the user scrolls down the page and clicks on the home button", () => {
    it("Then it should scroll to the top of the page", () => {
      cy.visit("http://localhost:3000/");

      cy.get('[placeholder="Username"]').type(adminUsername);
      cy.get('[placeholder="Password"]').type(adminPassword);

      cy.get(".login-register-button").click();
      cy.scrollTo(0, 500);

      cy.get(".header__logo").click();

      expect(window.scrollY).to.equal(0);
    });
  });
});
