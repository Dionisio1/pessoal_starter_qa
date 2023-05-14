Feature: Product Tests

    Pagina de produtos

    Scenario: [CT8]: Verify All Products and product detail page
        Given   Que esteja na home page
        When    Clicar no botão Products
        And     Clicar em view product do primeiro produto
        Then    Os detalhes do produto deverão estar visiveis
    # 1. Launch browser
    # 2. Navigate to url 'http://automationexercise.com'
    # 3. Verify that home page is visible successfully
    # 4. Click on 'Products' button
    # 5. Verify user is navigated to ALL PRODUCTS page successfully
    # 6. The products list is visible
    # 7. Click on 'View Product' of first product
    # 8. User is landed to product detail page
    # 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand