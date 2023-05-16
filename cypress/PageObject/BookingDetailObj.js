import {BookingDetailPage} from "../Pages/BookingDetailPage"
import {HomePage} from "../Pages/HomePage"
import testdata from '../fixtures/testdata.json';
import * as locationPageObj from "../PageObject/LocationPageObj"
import * as reviewAndBookPageObj from "../PageObject/ReviewAndBookPageObj"

const homePage = new HomePage();
const bookingDetailPage = new BookingDetailPage();

function chooseService(){
  bookingDetailPage.serviceTypeDropdown()
  bookingDetailPage.serviceType(testdata.BookingDetails['ServiceType'])
  // bookingDetailPage.noOfPeopleDropdown()
  // bookingDetailPage.noOfPeople(testdata.BookingDetails['NoOfPeople'])
  bookingDetailPage.treatmentTypeDrowdown()
  bookingDetailPage.treatmentType(testdata.BookingDetails['TreatmentType'])
  cy.xpath(bookingDetailPage.treatmentTypePrice(testdata.BookingDetails['TreatmentType'])).invoke('text').then((text) => { 
    cy.window().then((win) => {
      win.localStorage.setItem('price', text);
    });
  });

  cy.window().then((win) => {
    const storedValue = win.localStorage.getItem('price');
    // Use the retrieved value
    cy.log(storedValue);
  });
  
 
}

export function AddNewBookingDetail(){
  reviewAndBookPageObj.AddChangeService()
  homePage.validatePageTitle("Booking details").should('be.visible')
  chooseService();
  locationPageObj.ClickContinueBtn()
}


