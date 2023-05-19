import Home from "../Pages/Home";



When(/^scrolar a pagina ate o footer$/, () => {
	Home.scrollDown();
});

When(/^verificar o texto Subscription$/, () => {
	Home.validateMsgSubscrition();
});

When(/^informar email no campo Subscription e clicar no botão$/, () => {
    Home.fillEmailSubscription();
});

Then(/^receber mensagem de cadastro com sucesso$/, () => {
	Home.validadeMsgSucessSubscription();
});
