@recuperacaoSenha
Feature: Recuperacao de senha

  Background:
    Given que o usuario acessa a pagina de login

  @bug @navegacao
  Scenario: Link de esqueceu sua senha nao redireciona para recuperacao
    When ele clica em "Esqueceu sua senha"
    Then deve permanecer na tela de login sem redirecionamento para recuperacao
