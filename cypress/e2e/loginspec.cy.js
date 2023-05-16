import * as loginObj from "../PageObject/LoginPageObj"

describe('system ', () => {
    before(() => {
        loginObj.FrontEndLogin()
    });

    it(" user login ", () => {
        loginObj.Logins()
    })

});