// <reference types="cypress" />

import * as loginPage from "/cypress/pages/login-page"
import * as indexPage from "/cypress/pages/index-page"
import * as roomsPage from "/cypress/pages/rooms-page"
import * as targets from "/cypress/targets/targets"

describe("Delete Room", () => {
    beforeEach(() => {
      cy.visit(targets.base_url)
         loginPage.confirmHeader("Login")
         // cy.wait(500)
         // cy.percySnapshot("Login page");
      loginPage.loginUser(targets.username, targets.password, "Tester Hotel Overview")
         // cy.wait(500)
         // cy.percySnapshot("Tester Hotel Overview");
    });


it("Delete last room", () => {
   indexPage.viewRooms("Rooms")
   
      cy.wait(500)
      // cy.percySnapshot("Rooms page");
   //clientsPage.viewNewClient("New Client")
   roomsPage.deleteLastRoom()
      // cy.wait(500)
      // cy.percySnapshot("Last room has been removed");
 })});