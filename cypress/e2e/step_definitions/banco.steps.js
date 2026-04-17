import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import BancoDadosPage from '../../pages/BancoDadosPage'
import MenuPage from '../../pages/MenuPage'
import DashboardPage from '../../pages/DashboardPage'

const bancoDadosPage = new BancoDadosPage()
const menuPage = new MenuPage()
const dashboardPage = new DashboardPage()
const searchItems = ['alfa-banco', 'banco-especifico', 'omega-banco']

Given('que o usuario esta na pagina de banco de dados', () => {
  menuPage.openMenu()
  menuPage.bancoDeDadosLink().click()
  dashboardPage.assertBancoDeDadosUrl()
})

Given('que existe um item criado na lista', () => {
  dashboardPage.assertBancoDeDadosUrl()
  bancoDadosPage.createItem()
  bancoDadosPage.listItems().should('have.length.greaterThan', 0)
})

Given('que existe um item criado e arquivado', () => {
  dashboardPage.assertBancoDeDadosUrl()
  bancoDadosPage.createItem()
  bancoDadosPage.archiveFirstItem()
})

When('ele digita {string} no campo de busca', (term) => {
  bancoDadosPage.typeSearch(term)
})

When('ele executa a busca', () => {
  bancoDadosPage.search()
})

When('ele clica no botao de refresh', () => {
  bancoDadosPage.refresh()
})

When('ele cria um novo registro', () => {
  bancoDadosPage.createItem()
})

When('ele cria alguns novos registros para busca', () => {
  bancoDadosPage.createItems(searchItems)
})

When('ele pesquisa pelo nome de um item especifico criado', () => {
  bancoDadosPage.typeSearch('banco-especifico')
  bancoDadosPage.search()
})

When('ele tenta salvar um novo item sem preencher o nome', () => {
  bancoDadosPage.openCreateModal()
  bancoDadosPage.saveWithoutName()
})

When('ele exclui o item', () => {
  bancoDadosPage.deleteFirstItem()
})

When('ele arquiva o item', () => {
  bancoDadosPage.archiveFirstItem()
})

When('ele acessa a tela de arquivados', () => {
  bancoDadosPage.openArchived()
})

Then('deve exibir indevidamente a mensagem {string} antes de executar a busca', (message) => {
  bancoDadosPage.resultMessage(message).should('be.visible')
})

Then('deve exibir o resultado compativel com o filtro aplicado', () => {
  bancoDadosPage.resultsArea().should('be.visible')
})

Then('o item criado deve ser exibido na lista principal com as acoes disponiveis', () => {
  bancoDadosPage.createdItemRow().should('be.visible')
  bancoDadosPage.createdItemNameCell().should('be.visible')
  bancoDadosPage.createdItemDeleteButton().should('be.visible')
  bancoDadosPage.createdItemArchiveButton().should('be.visible')
})

Then('deve exibir o item pesquisado na tabela', () => {
  bancoDadosPage.itemShouldExistInCurrentTable('banco-especifico').should('be.visible')
  bancoDadosPage.itemShouldNotExistInCurrentTable('alfa-banco').should('be.true')
  bancoDadosPage.itemShouldNotExistInCurrentTable('omega-banco').should('be.true')
})

Then('deve exibir a mensagem de erro {string}', (message) => {
  bancoDadosPage.requiredNameError(message).should('be.visible')
})

Then('a tabela principal deve permanecer sem dados', () => {
  bancoDadosPage.createdItemShouldNotExist().should('be.true')
  bancoDadosPage.mainTableWithoutData().should('be.true')
})

Then('nao deve exibir o item arquivado na listagem de arquivados', () => {
  bancoDadosPage.archivedTitle().should('be.visible')
  bancoDadosPage.createdItemShouldNotExist().should('be.true')
  bancoDadosPage.archivedTableWithoutItems().should('be.true')
})
