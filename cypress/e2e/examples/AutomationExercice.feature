Feature: E-commerce Automation exercice

    Pagina de testes e-commerce para prática de testes automatizados.

Scenario: Register User
    Given Que esteja na home page
    When Clicar em signup
    And Informar nome e endereço de e-mail
    And clicar em signup
    And Preencher dados de tratamento
    And Preencher dados de Nome
    And Preencher dados de senha
    And Preencher dados de data de nascimento
    And Marcar checks newsletter e ofertas especiais
    And Preencher dados de endereço
    And Clicar em Criar conta
    And Verificar se o usuario esta logado
    Then Apagar conta do usuario