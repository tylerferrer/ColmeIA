@login
Feature: Login

  Background:
    Given que o usuario acessa a pagina de login

  @bug @autenticacao
  Scenario: Sistema exibe modal de login incorreto mesmo com credenciais validas
    When ele realiza login com credenciais validas
    Then deve exibir o modal com a mensagem "Seu login está incorreto, quer continuar?"

  @bug @autenticacao
  Scenario: Sistema permite continuar o login mesmo apos informar que ele esta incorreto
    When ele realiza login com credenciais validas
    And ele clica em "Continuar"
    Then deve redirecionar o usuario para a area autenticada

  @regressao @validacao
  Scenario: Exibir mensagem para campos obrigatorios de email e senha
    When ele preenche e limpa os campos de email e senha
    Then deve exibir a mensagem obrigatoria "Este campo é obrigatório" em 2 campos

  @regressao @validacao
  Scenario: Exibir mensagem para formato de email invalido sem preencher senha
    When ele preenche um email com formato invalido
    Then deve exibir mensagem de email invalido

  @regressao @validacao
  Scenario: Exibir mensagem para dados de login invalidos
    When ele realiza login com credenciais invalidas
    Then deve exibir mensagem de dados invalidos
