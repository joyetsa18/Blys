import {HomePage} from "../Pages/HomePage"

const homePage = new HomePage();

var userdata = Cypress.env("userdata");

export function goToBooking() {
  
  homePage.validatePageTitle("New booking").should('be.visible')

  this.clickIfExist( homePage.clickBooking())
   // homePage.clickBooking().click()
}

export function clickIfExist(element) {
    cy.get('body').then((body) => {
    cy.wait(5000).then(() => {
      if (body.find(element).length > -1) {
        cy.log('Element found, proceeding with test')
        homePage.clickBooking().click()
      } else {
        cy.log('Element not found, skipping test')
      }
    })
    })
}