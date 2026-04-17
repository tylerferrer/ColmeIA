@candidato
Feature: Dropdown de candidato

  Background:
    Given que o usuario esta logado
    And que o dropdown de candidato esta disponivel no dashboard

  @bug @dropdown
  Scenario: Dropdown do candidato nao executa nenhuma acao apos a selecao
    When ele clica no dropdown de candidato
    Then nao deve exibir opcoes do dropdown de candidato
    And deve permanecer na pagina principal sem executar acao
