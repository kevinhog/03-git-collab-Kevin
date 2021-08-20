/// <reference types ="cypress" />

import * as loginPage from "/cypress/pages/login-page"
import * as homeStartPage from "/cypress/pages/home-page"
import * as targets from "../targets/targets"

describe("Go to all pages", () => {
    beforeEach(() => {
        cy.visit(targets.base_url)
           loginPage.confirmHeader("Login")
           // cy.wait(500)
           // cy.percySnapshot("Login page");
        loginPage.loginUser(targets.username, targets.password, "Tester Hotel Overview")
           // cy.wait(500)
           // cy.percySnapshot("Tester Hotel Overview");
      });


// test case 2

    beforeEach("LoginPage", () => {
        
    })

    it("Go to Rooms", () => {

        homeStartPage.viewRooms("Rooms")

    })

    it("Go to Clients", () => {

        homeStartPage.viewClients("Clients")
    
    })

    it("Go to Bills", () => {

        homeStartPage.viewBills("Bills")
    
    })

    it("Go to Resurvations", () => {

        homeStartPage.viewResurvations("Reservations")
    
    })

    afterEach("LoginPage", () => {
        
        homeStartPage.logoutUser("Login")
    })

});