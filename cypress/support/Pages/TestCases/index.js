const elTestCases = require('./elements').ELEMENTS

class TestCases { 

    clickBtnCaseTests() {
        cy.get(elTestCases.btnCaseTests).click();
    };
    
    validadeCaseTestsPage() {
        cy.get(elTestCases.msgCaseTestPage).should('have.text', 'Test Cases');
    };
}
export default new TestCases()