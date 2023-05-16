import {ReviewAndBookPage} from "../Pages/ReviewAndBookPage"
import testdata from '../fixtures/testdata.json';
import * as helper from "../Helper/helper"

var assert = require('assert');
const reviewAndBookPage = new ReviewAndBookPage();

export function AddChangeAddress() {
    reviewAndBookPage.addSelectAddress().click()
}

export function AddChangeService() {
    reviewAndBookPage.selectService().click()
}

export function AddChangeTimePreferredDateAndTime() {
    reviewAndBookPage.preferredDateAndTime().click()
}

export function RequestToBook() {
    reviewAndBookPage.requestToBook().click()
}

export function validateBookingSummary() {
    validatePreferredDateAndtime()
    validatePrice()
      
}

function validatePreferredDateAndtime(){
    cy.xpath(`//div[contains(text(), "Preferred date and time")]/.././div[2]`).invoke('text').then((text) => { 
        var substring1 = text.split('between')[1];
        const actualEarliestTime = substring1.split('-')[0].trim();
        const actualLatestTime = substring1.split('-')[1].trim()
        
        //remove 
        cy.log("actualEarliestTime:", actualEarliestTime)
        cy.log("actualLatestTime:", actualLatestTime)
       
        assert.equal(testdata.PreferredDateAndtime['EarliestStart'], helper.timeFormat(actualEarliestTime), 
        `Failed !! Expected: ${testdata.PreferredDateAndtime['EarliestStart']} Actual: ${helper.timeFormat(actualEarliestTime)} `)
        cy.log(`Successfull !! Expected: ${testdata.PreferredDateAndtime['EarliestStart']} Actual= ${helper.timeFormat(actualEarliestTime)}`);
        
        assert.equal(testdata.PreferredDateAndtime['LatestStart'], helper.timeFormat(actualLatestTime), 
        `Failed !! Expected: ${testdata.PreferredDateAndtime['LatestStart']} Actual= ${helper.timeFormat(actualLatestTime)} `)
        cy.log(`Successful !! Expected: ${testdata.PreferredDateAndtime['LatestStart']} Actual= ${helper.timeFormat(actualLatestTime)} `)
        
    });
}

function validatePrice(){
    cy.window().then((win) => {
        const expectedPrice = win.localStorage.getItem('price');
        cy.log(expectedPrice);

        cy.xpath(reviewAndBookPage.price()).invoke('text').then((price) => { 
            var actualPrice = price.split('.')[0].trim();

            assert.equal(expectedPrice.trim(), actualPrice , 
            `Failed !! Expected Price: ${expectedPrice} Actual Price= ${actualPrice}`)
            cy.log(`Successfull !! Expected Price: ${expectedPrice} Actual Price= ${actualPrice}`)
    

        })
      });
}