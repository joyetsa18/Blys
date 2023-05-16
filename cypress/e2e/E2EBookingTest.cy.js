import * as homePageObj from "../PageObject/HomePageObj"
import * as locationPageObj from "../PageObject/LocationPageObj"
import * as bookingDetailPageObj from "../PageObject/BookingDetailObj"
import * as preferredDateTimePageObj from "../PageObject/PreferredDateTimePageObj"
import * as reviewAndBookPageObj from "../PageObject/ReviewAndBookPageObj"

describe(' E2E Booking Test', () => {
    beforeEach(() => {
        var userdata = Cypress.env("userdata");
        cy.login(userdata.email, userdata.password)
        cy.visit('/bookings')
    });

    it("Book new Appointment", () =>{
        homePageObj.goToBooking()
        locationPageObj.AddAddressFromReviewAndBookPage()
        bookingDetailPageObj.AddNewBookingDetail()
        preferredDateTimePageObj.SelectPreferredDateTime()
        reviewAndBookPageObj.validateBookingSummary()
        reviewAndBookPageObj.RequestToBook();
    })

});