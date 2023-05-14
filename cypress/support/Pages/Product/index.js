const elProduct = require('./elements').ELEMENTS


class Product {

    clickBtnProducts() {
        cy.get(elProduct.btnProducts).click();
        cy.get(elProduct.txtAllProducts).should('be.visible');
    }
    
    clickbtnViewProducts() {
        cy.get(elProduct.btnViewProduct).click();
    }
    validateInformationProduct() {
        cy.get(elProduct.txtProductName).should('be.visible');
        cy.get(elProduct.txtProductCategory).should('be.visible');
        cy.get(elProduct.txtProductPrice).should('be.visible');
        cy.get(elProduct.txtProductAvailability).should('be.visible');
        cy.get(elProduct.txtProductCondition).should('be.visible');
        cy.get(elProduct.txtProductBrand).should('be.visible');
    }

}

export default new Product();