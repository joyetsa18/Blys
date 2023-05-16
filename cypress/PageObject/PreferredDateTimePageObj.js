import {PreferredDateTimePage} from "../Pages/PreferredDateTimePage"
import {ReviewAndBookPage} from "../Pages/ReviewAndBookPage"
import {HomePage} from "../Pages/HomePage"
import testdata from '../fixtures/testdata.json';
import * as locationPageObj from "../PageObject/LocationPageObj"
import * as reviewAndBookPageObj from "../PageObject/ReviewAndBookPageObj"

const reviewAndBookPage = new ReviewAndBookPage();
const preferredDateTimePage = new PreferredDateTimePage();
const homePage = new HomePage();

function setTimeAndDate() {
    preferredDateTimePage.selectDay(testdata.PreferredDateAndtime['Day'])
    preferredDateTimePage.earliestStartDropdown()
    preferredDateTimePage.setTime(testdata.PreferredDateAndtime['EarliestStart'])
    preferredDateTimePage.latestStartDropdown()
    preferredDateTimePage.setTime(testdata.PreferredDateAndtime['LatestStart'])
}

export function SelectPreferredDateTime() {
    reviewAndBookPageObj.AddChangeTimePreferredDateAndTime()
    homePage.validatePageTitle("Preferred Date and time").should('be.visible')
    setTimeAndDate()
    locationPageObj.ClickContinueBtn()
}

