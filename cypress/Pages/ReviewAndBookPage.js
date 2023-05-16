export class ReviewAndBookPage {
    selectAddressText(){
        cy.xpath('//div[contains(text(),"Select address")]')
    }

    addSelectAddress(){
         return cy.xpath(`(//div[contains(text(),"Booking summary")]/.././/img)[1]/../../div[3]`)
    }

    selectService(){
       return cy.xpath(`(//div[contains(text(),"Booking summary")]/.././/img)[2]/../../div[3]`)
    }

    selectRecipient(){
        cy.xpath(`(//div[contains(text(),"Booking summary")]/.././/img)[3]/../../div[3]`)
    }

    preferredDateAndTime(){
      return  cy.xpath(`(//div[contains(text(),"Booking summary")]/.././/img)[4]/../../div[3]`)
    }

    selectCreditCard(){
        cy.xpath(`(//div[contains(text(),"Payment")]/..//button/button)[1]`)
    }

    requestToBook(){
        return cy.xpath(`//div[contains(text(),"Request to book")]`)
    }

    selectedPreferredDateAndTime(){
        cy.xpath(`//div[contains(text(), "Preferred date and time")]/.././div[2]`)
    }

    price(){
        return `//p[contains(text(), 'Subtotal')]//parent::div/parent::div//div[2]` 
    }



}