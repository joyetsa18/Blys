export class BookingLocationPage {
    locationList(){
        cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]')
    }

    deleteAddress(){
        cy.xpath('(//a[contains(text(),"Delete")])[1]').click()  
    }

    clickAddLocation(){
        return cy.xpath('//a[contains(text(),"Add new location")]')
    }

    enterAddress(address){
        cy.xpath('//input[@placeholder="Street address"]').type(address)
    }

    clickedSelectedAddress(address){
        cy.xpath(`//div[contains(text(),'${address}')]`).click({force: true})
    }

    locationTypeDropdown(){
        cy.wait(1000)
        cy.xpath('(//p[@class="MuiTypography-root MuiTypography-body1"])[1]').click({force: true})
    }
    
    locationType(location){
        cy.xpath(`//div[contains(text(),'${location}')]`).click()
    }

    parkingTypeDropdown(){
        cy.xpath('(//p[@class="MuiTypography-root MuiTypography-body1"])[2]').click()
    }
    
    parkingType(parking){
        cy.xpath(`//div[contains(text(),"${parking}")]`).click()
    }

    stairTypeDropdown(){
        cy.xpath('(//p[@class="MuiTypography-root MuiTypography-body1"])[3]').click()     
    }

    stairType(stair){
        cy.xpath(`//div[contains(text(),"${stair}")]`).click()
    }

    petTypeDropdown(){
        cy.xpath('(//p[@class="MuiTypography-root MuiTypography-body1"])[4]').click()
    }

    petType(pet){
        cy.xpath(`//div[contains(text(),"${pet}")]`).click()
    }

    continueBtn(){
        cy.xpath('//div[contains(text(),"Continue")]').click()
    }

    SaveBtn(){
        cy.xpath('//div[contains(text(),"Save")]').click()
    }





}