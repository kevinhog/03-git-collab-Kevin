/// <reference types="cypress" />

import * as loginPage from "/cypress/pages/login-page"
import * as indexPage from "/cypress/pages/index-page"
import * as clientsPage from "/cypress/pages/clients-page"
import * as targets from "/cypress/targets/targets"

describe("Delete client", () => {
    beforeEach(() => {
      cy.visit(targets.base_url)
         loginPage.confirmHeader("Login")
         // cy.wait(500)
         // cy.percySnapshot("Login page");
      loginPage.loginUser(targets.username, targets.password, "Tester Hotel Overview")
         // cy.wait(500)
         // cy.percySnapshot("Tester Hotel Overview");
    });

    it("Delete last client", () => {
        indexPage.viewClients("Clients")
           // cy.wait(500)
           // cy.percySnapshot("Clients page");
        //clientsPage.viewNewClient("New Client")
        clientsPage.deleteLastClient()
           // cy.wait(500)
           // cy.percySnapshot("Last Client is removed");
        cy.wait(500)
      });
      it("Logout", () => {
         indexPage.logoutUser("Login")
           // cy.wait(500)
           // cy.percySnapshot("User logges out and returns to Login page");
         cy.wait(500)
      
       })});