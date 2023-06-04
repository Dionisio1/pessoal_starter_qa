import Cart                 from "../Pages/Cart";
import dataLogin from "../../fixtures/dataLogin.json"




When(/^Clicar no botão cart$/, () => {
	Cart.clickBtnCart();
});


Then(/^Devo enviar email para receber novidades$/, () => {
    Cart.sendSubscribe();
});

