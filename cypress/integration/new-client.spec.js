/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as newClientPage from "../pages/new-client-page"
import * as targets from "../targets/targets"

var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();


//let checkbox = " ✓ "    // "baseUrl": "http://localhost:3000",

describe("Testsuite", () => {
    beforeEach(() => {
      cy.visit(targets.base_url)
         loginPage.confirmHeader("Login")
         // cy.wait(500)
         // cy.percySnapshot("Login page");
      loginPage.loginUser(targets.username, targets.password, "Tester Hotel Overview")
         // cy.wait(500)
         // cy.percySnapshot("Tester Hotel Overview");
    });


it("Create a new client", () => {
    indexPage.viewClients("Clients")
      //  cy.wait(500)
       // cy.percySnapshot("Clients page");
    clientsPage.viewNewClient("New Client")
       // cy.wait(500)
       // cy.percySnapshot("New Client Page");
    newClientPage.createNewClient(randomName, randomMail, randomPhone, "Clients")
    clientsPage.verifyLastClient(randomName, randomMail, randomPhone)
       // cy.percySnapshot("New Client is created and verified")
  });

  
  it("Logout", () => {
   indexPage.logoutUser("Login")
     // cy.wait(500)
     // cy.percySnapshot("User logges out and returns to Login page");
   cy.wait(500)

 })});