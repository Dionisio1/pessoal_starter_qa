Feature: Contact Test

    Pagina de Contact 

    Scenario: [CT6]: Contact Us Form
        Given   Que esteja na home page
        When    Clicar no botão Contact Us
        And     informar dados para contato
        Then    clicar em submit
        And     clicar no botão home