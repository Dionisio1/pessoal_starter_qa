import Product from "../Pages/Product";

When(/^Clicar no botão Products$/, () => {
    Product.clickBtnProducts();
});

When(/^Clicar em view product do primeiro produto$/, () => {
	Product.clickbtnViewProducts();
});

Then(/^Os detalhes do produto deverão estar visiveis$/, () => {
	Product.validateInformationProduct();
});


When(/^Pesquisar por um produto determinado$/, () => {
   Product.seachProduct();
});


Then(/^Devo validar que os produtos são apresentados$/, () => {
    Product.validateSeachProducts();
});