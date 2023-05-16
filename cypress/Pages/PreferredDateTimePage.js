

export class PreferredDateTimePage{

    selectDay(day){
        cy.xpath(`//div[@aria-label="${day}"]`).click()
    }
    
    earliestStartDropdown(){
        cy.xpath('//div[contains(text(),"Earliest start")]/../..//p').click()
    }

    setTime(time){
        cy.xpath(` //div[contains(text(),"${time}")]`).click()
    }

    latestStartDropdown(){
        cy.xpath('//div[contains(text(),"Latest start")]/../..//p').click()
    }

}