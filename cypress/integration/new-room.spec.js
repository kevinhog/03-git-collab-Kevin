// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as roomsPage from "../pages/rooms-page"
import * as newRoomPage from "../pages/new-room-page"
import * as targets from "../targets/targets"

var faker = require('faker');

//let checkbox = " ✓ "    // "baseUrl": "http://localhost:3000",


let randomCategory = faker.random.arrayElement(["double","single","twin"]);
let randomNumber = faker.datatype.number({min: 1, max: 1000})
let randomFloor = faker.datatype.number({min: 1, max: 50})
let randomPrice = faker.datatype.number({min: 1000, max: 10000})
let randomFeature = faker.random.arrayElement(["balcony","ensuite","sea_view","penthouse"]);

describe("create a room", () => {
    beforeEach(() => {
      cy.visit(targets.base_url)
         loginPage.confirmHeader("Login")
         // cy.wait(500)
         // cy.percySnapshot("Login page");
      loginPage.loginUser(targets.username, targets.password, "Tester Hotel Overview")
         // cy.wait(500)
         // cy.percySnapshot("Tester Hotel Overview");
    });


it("Create a new room", () => {
   indexPage.viewRooms("Rooms")
      // cy.wait(500)
      // cy.percySnapshot("Rooms page");
   roomsPage.viewNewRoom("New Room")
      // cy.wait(500)
      // cy.percySnapshot("New Room Page");
   newRoomPage.createNewRoom(randomCategory,randomNumber,randomFloor, randomPrice, randomFeature,"Rooms")
   cy.wait(500)
   if (randomFeature == "sea_view") {
     randomFeature = "sea view"
   }
   roomsPage.verifyLastRoom(randomCategory,randomNumber,randomFloor, randomPrice, randomFeature) 
      // cy.wait(500)
      // cy.percySnapshot("New Room is created and verified");
 });
 it("Logout", () => {
   indexPage.logoutUser("Login")
     // cy.wait(500)
     // cy.percySnapshot("User logges out and returns to Login page");
   cy.wait(500)

 })});