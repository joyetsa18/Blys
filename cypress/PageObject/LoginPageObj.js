import {Login} from "../Pages/LoginPage"

const loginpage = new Login();

var userdata = Cypress.env("userdata");

function getCurrentUrl() {
    return Cypress.env(Cypress.env("FrontendURL")).url;
}

export function FrontEndLogin() {
    cy.visit(getCurrentUrl());
    // cy.clearCookies()
    // cy.getCookies().should('be.empty')
}

// export function Logins() {
//     loginpage.UserLogin(userdata);
// }

export function Logins() {
    loginpage.enterUserName(userdata)
    loginpage.enterPassword(userdata)
    loginpage.clickLoginBtn()
}


