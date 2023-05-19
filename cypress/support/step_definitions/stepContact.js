import Contact from "../Pages/Contact";

When(/^clicar em submit$/, () => {
	Contact.clickBtnSubmitContact();
});


Then(/^Devo validar a mensagem de sucesso$/, () => {
	Contact.validadeSucessfullyMsg();
});


When(/^clicar no botão home$/, () => {
	Contact.clickBtnHomeContact();
});
