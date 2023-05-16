export class HomePage {
    clickBooking(){
      return  cy.xpath('//div[contains(text(),"New booking")]')//.click({force: true}) 
    }

    validatePageTitle(pageTitle){
     return cy.xpath(`//div[contains(text(),'${pageTitle}')]`)
    }
}