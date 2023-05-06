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

function FormSignupPassword() {
    cy.get(fieldFormPasswordSignup).click().type('123456');
}

When(/^Preencher dados de senha$/, () => {
	Login.FormSignupPassword();
});

When(/^Preencher dados de data de nascimento$/, () => {
	Login.FormSignupDateOfBirth();
});

When(/^Marcar checks newsletter e ofertas especiais$/, () => {
	Login.FormSignupNewsletterOtions();
});

When(/^Preencher dados de endereço$/, () => {
	Login.FormSignupAddress();
});
 
When(/^Clicar em Criar conta$/, () => {
    Login.createAccount();
});

When(/^Verificar se o usuario esta logado$/, () => {
    Login.isUserLogged();
});

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
