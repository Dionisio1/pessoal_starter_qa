/// <reference types="Cypress"/>
import dataLogin from "../../../fixtures/dataLogin.json"
import mensages  from "../../../fixtures/mensages.json"

const elLogin = require('./elements').ELEMENTS

class Login {
    clickLogin() {
        cy.get(elLogin.carrouselhome).should("be.visible");
        cy.get(elLogin.btnSignupLogin).click();
        cy.get(elLogin.formSignupLogin).should("be.visible");
    };
    loginWrongNameEmail() {
        cy.get(elLogin.fieldLoginEmail).click().type(dataLogin.failEmail);
        cy.get(elLogin.fieldLoginPasswd).click().type(dataLogin.correctPassword);
        cy.get(elLogin.btnLogin).click();
    };
    loginNameEmail() {
        cy.get(elLogin.fieldLoginEmail).click().type(dataLogin.correctEmail);
        cy.get(elLogin.fieldLoginPasswd).click().type(dataLogin.correctPassword);
        cy.get(elLogin.btnLogin).click();
    };

    failMsgSignup() {
        cy.get(elLogin.fieldMsgSignup).should('have.text', mensages.failMsgSignup);
    };

    signupNameEmail() {
        cy.get(elLogin.fieldSignupName).click().type('Dio Teste');
        cy.get(elLogin.fieldSignupEmail).click().type(dataLogin.correctEmail);
    };

    clickBtnSignupLogin() {
        cy.get(elLogin.btnSignupLogin).click();    
    };

    clickBtnSignup() {
        cy.get(elLogin.btnSignup).click();    
    };

    clickGender() {
        cy.get(elLogin.rdbGenderMasc).click();
    };

    FormSignupName() {
        cy.get(elLogin.fieldFormNameSignup).click().clear().type('Dionisio Teste');    
    };

    FormSignupPassword() {
        cy.get(elLogin.fieldFormPasswordSignup).click().type('123456');
    };

    FormSignupDateOfBirth() {
        cy.get(elLogin.fieldFormDayBirthSignup).select('6');
        cy.get(elLogin.fieldFormMonthBirthSignup).select('September');
        cy.get(elLogin.fieldFormYearBirthSignup).select('1982')
    };

    FormSignupNewsletterOtions() {
        cy.get(elLogin.fieldFormNewsletterSignup).check();
        cy.get(elLogin.fieldFormOptionSignup).check();    
    };

    FormSignupAddress() {
        cy.get(elLogin.fieldFormFirstName).click().type('Dionisio');
        cy.get(elLogin.fieldFormLastName).click().type('Teste Automação');
        cy.get(elLogin.fieldFormCompany).click().type('Minha Automacao');
        cy.get(elLogin.fieldFormAddress).click().type('Rua da automacao, 22 - Bobotization');
        cy.get(elLogin.fieldFormAddress2).click().type('Campo de endereço para segunda informação');
        cy.get(elLogin.fieldFormCountry).select('United States');
        cy.get(elLogin.fieldFormState).click().type('Ohio')
        cy.get(elLogin.fieldFormCity).click().type('Oclaroma');
        cy.get(elLogin.fieldFormZipcode).click().type('58000000');
        cy.get(elLogin.fieldFormMobileNumber).click().type('83981255238');
    };

    createAccount() {
        cy.get(elLogin.btnCreateAccount).click();
        cy.get(elLogin.msgActionAccount).should('have.text', 'Account Created!');
        cy.get(elLogin.btnContinue).click();    
    };

    isUserLogged() {
        cy.get(elLogin.btnLogout).should('have.text', ' Logout');
        cy.get(elLogin.avatarLogged).should('be.visible');
        cy.get(elLogin.avatarLogged).should('have.text', ' Logged in as Dionisio Teste');
    };
    
    deleteAccount() {
        cy.get(elLogin.btnDeleteAccount).click();
        cy.get(elLogin.msgActionAccount).should('have.text', 'Account Deleted!');
        cy.get(elLogin.btnContinue).click();    
    };

    logoutAccount(){
        cy.get(elLogin.btnLogout).click();
    };

    validateLoggout(){
        cy.get(elLogin.clickBtnSignupLogin).should("have.text", "Signup / Login");
    }

    validateMsgExistingAccount(){
        cy.wait(2000);
        // cy.get('.signup-form > form > p').should('be.visible')
        cy.get(elLogin.fieldMsgExistEmail).should('be.visible');
        // cy.get('.signup-form > form > p').should('have.text', mensages.failMsgCreateAccount)
        cy.get(elLogin.fieldMsgExistEmail).should('have.text', mensages.failMsgCreateAccount)
    }
};



export default new Login();


