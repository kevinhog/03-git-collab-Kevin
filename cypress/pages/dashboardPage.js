/// <reference types="cypress" />

//Elements
const LOGOUT_BTN = '.btn'

//Actions
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent) 
}

//Export the methods / functions / actions
module.exports = {
    performLogout
}