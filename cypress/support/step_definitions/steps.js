import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

//----------------- Google search -------------------------


Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})


//  ----------------- Automation Test -------------------------


Given(/^Quando estiver na pagina de teste$/, () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.visit("https://demo.automationtesting.in/Register.html");
});

// ----------------- Automation exercice -------------------------


Given(/^Que esteja na home page$/, () => {
	cy.visit("http://automationexercise.com");
    cy.get('#slider-carousel > .carousel-inner > .active > :nth-child(1)').should("be.visible")
});


When(/^Clicar em signup$/, () => {
	cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.signup-form > h2').should("be.visible");
});


When(/^Informar nome e endereço de e-mail$/, () => {
	cy.get('[data-qa="signup-name"]').click().type('Dio Teste');
    cy.get('[data-qa="signup-email"]').click().type("dionisio.soares@acct.global");
    

});


When(/^clicar em signup$/, () => {
	cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('be.visible');
});


When(/^Preencher dados de tratamento$/, () => {
	cy.get('#id_gender1').click();
});


When(/^Preencher dados de Nome$/, () => {
	cy.get('[data-qa="name"]').click().clear().type('Dionisio Teste');
    // cy.type('Dionisio Teste')
});


When(/^Preencher dados de senha$/, () => {
	cy.get('[data-qa="password"]').click().type('123456');
});


When(/^Preencher dados de data de nascimento$/, () => {
	cy.get('[data-qa="days"]').select('6');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('1982')
    cy.get('#newsletter').check();
    cy.get('#optin').check();
});


When(/^Marcar checks newsletter e ofertas especiais$/, () => {
	cy.get('#newsletter').check();
    cy.get('#optin').check();
});


When(/^Preencher dados de endereço$/, () => {
	cy.get('[data-qa="first_name"]').click().type('Dionisio');
    cy.get('[data-qa="last_name"]').click().type('Teste Automação');
    cy.get('[data-qa="company"]').click().type('Minha Automacao');
    cy.get('[data-qa="address"]').click().type('Rua da automacao, 22 - Bobotization');
    cy.get('[data-qa="address2"]').click().type('Campo de endereço para segunda informação');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').click().type('Ohio')
    cy.get('[data-qa="city"]').click().type('Oclaroma');
    cy.get('[data-qa="zipcode"]').click().type('58000000');
    cy.get('[data-qa="mobile_number"]').click().type('83981255238');
    
    
});


When(/^Clicar em Criar conta$/, () => {
	cy.get('[data-qa="create-account"]').click();
    cy.get('b').should('have.text', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()

});


When(/^Verificar se o usuario esta logado$/, () => {
	cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text', ' Logout');
    cy.get(':nth-child(10) > a').should('be.visible');
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Dionisio Teste');
});


Then(/^Apagar conta do usuario$/, () => {
	cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('b').should('have.text', 'Account Deleted!');
});
