
@bancoDeDados
Feature: Banco de dados

  Background:
    Given que o usuario esta logado
    And que o usuario esta na pagina de banco de dados

  @bug @busca
  Scenario: Barra de busca antecipa mensagem de nenhum resultado antes da confirmacao da pesquisa
    When ele digita "teste" no campo de busca
    Then deve exibir indevidamente a mensagem "Nenhum resultado encontrado para \"teste\"" antes de executar a busca
    When ele executa a busca
    Then deve exibir o resultado compativel com o filtro aplicado

  @bug @refresh @ux
  Scenario: Botao de refresh limpa a listagem em vez de apenas atualizar os dados
    Given que existe um item criado na lista
    When ele clica no botao de refresh
    Then a tabela principal deve permanecer sem dados

  @regressao @criacao
  Scenario: Criar um novo registro com sucesso
    When ele cria um novo registro
    Then o item criado deve ser exibido na lista principal com as acoes disponiveis

  @regressao @busca
  Scenario: Criar varios registros e pesquisar por um nome especifico
    When ele cria alguns novos registros para busca
    And ele pesquisa pelo nome de um item especifico criado
    Then deve exibir o item pesquisado na tabela

  @bug @criacao
  Scenario: Exibir erro ao tentar salvar um item sem preencher o nome
    When ele tenta salvar um novo item sem preencher o nome
    Then deve exibir a mensagem de erro "O nome do item é obrigatório"

  @regressao @exclusao
  Scenario: Excluir um item da base
    Given que existe um item criado na lista
    When ele exclui o item
    Then a tabela principal deve permanecer sem dados

  @regressao @arquivamento
  Scenario: Arquivar um item da lista principal
    Given que existe um item criado na lista
    When ele arquiva o item
    Then a tabela principal deve permanecer sem dados

  @bug @arquivamento
  Scenario: Item arquivado nao e exibido na tela de arquivados
    Given que existe um item criado e arquivado
    When ele acessa a tela de arquivados
    Then nao deve exibir o item arquivado na listagem de arquivados

@bug @bancoDeDados
  Scenario: Dados do banco de dados sao limpos ao navegar para Colmeia Forms e retornar
    When ele cria varios bancos de dados
    And ele navega para a tela de colmeia forms
    And ele retorna para a tela de banco de dados
    Then os bancos de dados criados nao deveriam ter sido limpos