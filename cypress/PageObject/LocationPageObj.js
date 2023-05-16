import {BookingLocationPage} from "../Pages/BookingLocationPage"
import {HomePage} from "../Pages/HomePage"
import testdata from '../fixtures/testdata.json';
import * as reviewAndBookPageObj from "../PageObject/ReviewAndBookPageObj"

const homePage = new HomePage();

const bookingLocationPage = new BookingLocationPage();

function deleteAddress() {
    bookingLocationPage.deleteAddress()
}

export function deleteExisitingAddress(){
    cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]').then(($el) => {
        var length = $el[0].children.length
        cy.log("Number of Address = " + length)
        for (let i = 1; i <= length; i++) {
            cy.log("loop count = " + i)
            deleteAddress()
            cy.reload()
        }
    })
    cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]').children().should('have.length', 0)
}

function addAddress(){
    bookingLocationPage.enterAddress(testdata.Addresses['Address'])
    bookingLocationPage.clickedSelectedAddress(testdata.Addresses['Address'])
    bookingLocationPage.parkingTypeDropdown()
    bookingLocationPage.parkingType(testdata.Addresses['Parking'])
    bookingLocationPage.locationTypeDropdown()
    bookingLocationPage.locationType(testdata.Addresses['LocationType'])
    bookingLocationPage.stairTypeDropdown()
    bookingLocationPage.stairType(testdata.Addresses['Stair'])
    bookingLocationPage.petTypeDropdown()
    bookingLocationPage.petType(testdata.Addresses['Pet'])
    bookingLocationPage.SaveBtn() 
}

export function ClickContinueBtn(){
    bookingLocationPage.continueBtn()
}

function clickAddNewLocation(){
    bookingLocationPage.clickAddLocation().should('have.text', 'Add new location').click()
} 

export function AddAddressFromReviewAndBookPage(){
    reviewAndBookPageObj.AddChangeAddress()
    homePage.validatePageTitle("Booking location").should('be.visible')
    deleteExisitingAddress()
    clickAddNewLocation()
    addAddress()
    ClickContinueBtn() 
}



