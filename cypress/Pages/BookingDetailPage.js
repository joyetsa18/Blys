
export class BookingDetailPage{

    serviceTypeDropdown(){
        cy.wait(1000)
        cy.xpath('//div[contains(text(),"Service type")]/../.././/p').click({force: true})
    }
    
    serviceType(type){
        cy.xpath(`(//div[contains(text(),'${type}')])[1]`).click()   
    }

    noOfPeopleDropdown(){
        cy.wait(1000)
        cy.xpath('//div[contains(text(),"How many people?")]/../.././/p').click({force: true})
    }

    noOfPeople(count){
        cy.xpath(`//div[contains(text(),'${count}')]`).click()   
    }

    treatmentTypeDrowdown(){
        cy.wait(1000)
        cy.xpath('//div[contains(text(),"Treatment type")]/.././/p').click({force: true})
    }

    treatmentType(type){
        cy.xpath(`//p[contains(text(),'${type}')]`).click()   
    }

    treatmentTypePrice(type){
      return  `//p[contains(text(),'${type}')]//parent::div/p[2]`
    }



}