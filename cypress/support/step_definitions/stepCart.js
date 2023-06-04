import Cart                 from "../Pages/Cart";





When(/^Clicar no botão cart$/, () => {
	Cart.clickBtnCart();
});


Then(/^Devo enviar email para receber novidades$/, () => {
    Cart.sendSubscribe();
});

