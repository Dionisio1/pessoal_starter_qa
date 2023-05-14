Feature: E-commerce Automation exercice

    Pagina de testes e-commerce para prática de testes automatizados.

    Scenario: [CT1]: Register User
        Given   Que esteja na home page
        When    Clicar em signupLogin
        And     Informar nome e endereço de e-mail
        And     clicar em botão signup
        And     Preencher dados de tratamento
        And     Preencher dados de Nome
        And     Preencher dados de senha
        And     Preencher dados de data de nascimento
        And     Marcar checks newsletter e ofertas especiais
        And     Preencher dados de endereço
        And     Clicar em Criar conta
        And     Verificar se o usuario esta logado
        Then    Apagar conta do usuario

    Scenario: [CT2]: Login User with correct email and password
        Given   Que esteja na home page
        When    tiver uma conta criada
        And     logar na conta
        Then    Apagar conta do usuario     
    
    Scenario: [CT3]: Login User with incorrect email and password
        Given   Que esteja na home page
        When    Clicar em signupLogin
        When    digitar usuário e senha ERRADOS e clicar em submit
        Then    mensagem de erro deve aparecer

    Scenario: [CT4]: Loggout User
        Given   Que esteja na home page
        When    tiver uma conta criada    
        And     logar na conta
        And     Verificar se o usuario esta logado
        And     Fazer Loggout
        And     logar na conta
        Then    Apagar conta do usuario

    Scenario: [CT5]: Register User with existing email
        Given   Que esteja na home page
        When    tiver uma conta criada
        And     criar uma conta ja existente para o email
        And     Apresentará erro que email ja é cadastrado
        And     logar na conta 
        Then    Apagar conta do usuario

    Scenario: [CT6]: Contact Us Form
        Given   Que esteja na home page
        When    Clicar no botão Contact Us
        And     informar dados para contato
        And     clicar em submit
        Then    Devo validar a mensagem de sucesso
        And     clicar no botão home

    Scenario: [CT7]: Verificação da pagina Test Cases
        Given   Que esteja na home page
        When    Quando eu clicar no botão test Cases
        Then    Devo estar na pagina de test cases

    Scenario: [CT8]: Verify All Products and product detail page
        Given   Que esteja na home page
        When    Clicar no botão Products
        And     Clicar em view product do primeiro produto
        Then    Os detalhes do produto deverão estar visiveis