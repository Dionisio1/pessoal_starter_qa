import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import Login from "../Pages/Login"
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
// ----------------- Automation exercice ------------------------

Given(/^Que esteja na home page$/, () => {
	cy.visit("https://automationexercise.com");
});


When(/^Clicar em signupLogin$/, () => {
	Login.clickBtnSignupLogin();
});


When(/^clicar em botão signup$/, () => {
	Login.clickBtnSignup();
});


When(/^digitar usuário e senha ERRADOS e clicar em submit$/, () => {
    Login.loginWrongNameEmail();
    
});

Then(/^mensagem de erro deve aparecer$/, () => {
	Login.failMsgSignup();
});

When(/^Informar nome e endereço de e-mail$/, () => {
	Login.signupNameEmail();
});


When(/^Preencher dados de tratamento$/, () => {
	Login.clickGender();
});


When(/^Preencher dados de Nome$/, () => {
	Login.FormSignupName();
    
});

// var fieldFormPasswordSignup = '[data-qa="password"]'
function FormSignupPassword() {
    cy.get(fieldFormPasswordSignup).click().type('123456');
}

When(/^Preencher dados de senha$/, () => {
	Login.FormSignupPassword();
});

// var fieldFormDayBirthSignup = '[data-qa="days"]'
// var fieldFormMonthBirthSignup = '[data-qa="months"]'
// var fieldFormYearBirthSignup = '[data-qa="years"]'
// var fieldFormNewsletterSignup = '#newsletter'
// var fieldFormOptionSignup =  '#optin'

// function FormSignupDateOfBirth() {
//     cy.get(fieldFormDayBirthSignup).select('6');
//     cy.get(fieldFormMonthBirthSignup).select('September');
//     cy.get(fieldFormYearBirthSignup).select('1982')
//     cy.get(fieldFormNewsletterSignup).check();
//     cy.get(fieldFormOptionSignup).check();
// };
When(/^Preencher dados de data de nascimento$/, () => {
	Login.FormSignupDateOfBirth();
});



When(/^Marcar checks newsletter e ofertas especiais$/, () => {
	Login.FormSignupNewsletterOtions();
});

// var fieldFormFirstName = '[data-qa="first_name"]'
// var fieldFormLastName = '[data-qa="last_name"]'
// var fieldFormCompany = '[data-qa="company"]'
// var fieldFormAddress = '[data-qa="address"]'
// var fieldFormAddress2 = '[data-qa="address2"]'
// var fieldFormCountry = '[data-qa="country"]'
// var fieldFormState = '[data-qa="state"]'
// var fieldFormCity = '[data-qa="city"]'
// var fieldFormZipcode = '[data-qa="zipcode"]'
// var fieldFormMobileNumber = '[data-qa="mobile_number"]'

// function FormSignupAddress() {
//     cy.get(fieldFormFirstName).click().type('Dionisio');
//     cy.get(fieldFormLastName).click().type('Teste Automação');
//     cy.get(fieldFormCompany).click().type('Minha Automacao');
//     cy.get(fieldFormAddress).click().type('Rua da automacao, 22 - Bobotization');
//     cy.get(fieldFormAddress2).click().type('Campo de endereço para segunda informação');
//     cy.get(fieldFormCountry).select('United States');
//     cy.get(fieldFormState).click().type('Ohio')
//     cy.get(fieldFormCity).click().type('Oclaroma');
//     cy.get(fieldFormZipcode).click().type('58000000');
//     cy.get(fieldFormMobileNumber).click().type('83981255238');
// };
When(/^Preencher dados de endereço$/, () => {
	Login.FormSignupAddress();
});

// var btnCreateAccount = '[data-qa="create-account"]'
// var msgCreateAccount = 'b'
// var btnContinue = '[data-qa="continue-button"]'

// function createAccount() {
// 	cy.get(btnCreateAccount).click();
//     cy.get(msgCreateAccount).should('have.text', 'Account Created!');
//     cy.get(btnContinue).click();    
// };
When(/^Clicar em Criar conta$/, () => {
    Login.createAccount();
});

// var btnLogout = '.shop-menu > .nav > :nth-child(4) > a'
// var avatarLogged = ':nth-child(10) > a'

// function isUserLogged() {
//     cy.get(btnLogout).should('have.text', ' Logout');
//     cy.get(avatarLogged).should('be.visible');
//     cy.get(avatarLogged).should('have.text', ' Logged in as Dionisio Teste');
// };

When(/^Verificar se o usuario esta logado$/, () => {
    Login.isUserLogged();
});
// var btnDeleteAccount = '.shop-menu > .nav > :nth-child(5) > a'

function deleteAccount() {
	cy.get(btnDeleteAccount).click();
    cy.get(msgActionAccount).should('have.text', 'Account Deleted!');
    cy.get(btnContinue).click();    
};

Then(/^Apagar conta do usuario$/, () => {
    Login.deleteAccount();
});


When(/^tiver uma conta criada$/, () => {

    Login.clickBtnSignupLogin();
    Login.signupNameEmail();
    Login.clickBtnSignup();
    Login.clickGender();
    Login.FormSignupName();
    Login.FormSignupPassword();
    Login.FormSignupDateOfBirth();
    Login.FormSignupNewsletterOtions();
    Login.FormSignupAddress();
    Login.createAccount();
    Login.isUserLogged();
    Login.logoutAccount();
});


Then(/^logar na conta$/, () => {
	Login.loginNameEmail();
});
