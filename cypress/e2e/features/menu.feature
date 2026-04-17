@menu
Feature: Menu lateral

  Background:
    Given que o usuario esta logado

  @regressao @navegacao
  Scenario: Abrir menu lateral
    When ele clica no botao do menu lateral
    Then o menu deve ser exibido

  @bug @navegacao
  Scenario: Botao do menu lateral nao fecha o painel ao clicar pela segunda vez
    Given que o menu lateral esta aberto
    When ele clica novamente no botao do menu lateral
    Then o menu deve permanecer aberto mesmo apos o segundo clique

  @bug @navegacao
  Scenario: Acessar Colmeia Forms redireciona para uma tela vazia
    Given que o menu lateral esta aberto
    When ele clica na opcao "Colmeia Forms"
    Then deve exibir a url de Colmeia Forms sem conteudo principal renderizado
