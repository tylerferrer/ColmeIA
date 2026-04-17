import bancoDadosElements from '../elements/bancoDados.elements'

class BancoDadosPage {
  constructor() {
    this.lastCreatedItemName = null
    this.createdItemNames = []
  }

  searchInput() {
    return cy.get(bancoDadosElements.searchInput).first()
  }

  searchButton() {
    return cy.get(bancoDadosElements.searchButton).first()
  }

  refreshButton() {
    return cy
      .get(bancoDadosElements.iconButtons)
      .filter((_, element) =>
        Cypress.$(element).find(`path[d*="${bancoDadosElements.refreshIconPathFragment}"]`).length > 0
      )
      .first()
  }

  createButton() {
    return cy.contains('button', 'Criar')
  }

  createModalTitle() {
    return cy.contains('h2', bancoDadosElements.createModalTitleText)
  }

  createItemInput() {
    return cy.get(bancoDadosElements.createItemInput)
  }

  saveButton() {
    return cy.contains('button', bancoDadosElements.saveButtonText)
  }

  requiredNameError(message) {
    return cy.contains(bancoDadosElements.validationMessageTargets, message)
  }

  emptyArchivedState() {
    return this.archivedTitle()
  }

  mainTableWithoutData() {
    return cy.get(bancoDadosElements.resultsArea).then(($table) => {
      const hasDeleteButtons = $table.find(bancoDadosElements.deleteItemButton).length > 0
      const hasArchiveButtons = $table.find(bancoDadosElements.archiveItemButton).length > 0
      const hasEmptyState = $table.text().includes('Nenhum banco de dados encontrado')
      const hasRows = $table.find(bancoDadosElements.listItems).length > 0

      return !hasDeleteButtons && !hasArchiveButtons && (!hasRows || hasEmptyState)
    })
  }

  archivedTableWithoutItems() {
    return cy.get(bancoDadosElements.resultsArea).then(($table) => {
      const hasDeleteButtons = $table.find(bancoDadosElements.deleteItemButton).length > 0
      const hasArchiveButtons = $table.find(bancoDadosElements.archiveItemButton).length > 0

      return !hasDeleteButtons && !hasArchiveButtons
    })
  }

  archivedTab() {
    return cy
      .get(bancoDadosElements.iconButtons)
      .filter((_, element) =>
        Cypress.$(element).find(`path[d*="${bancoDadosElements.archivedIconPathFragment}"]`).length > 0
      )
      .first()
  }

  resultsArea() {
    return cy.get(bancoDadosElements.resultsArea).first()
  }

  listItems() {
    return cy.get(bancoDadosElements.listItems)
  }

  typeSearch(term) {
    this.searchInput().clear().type(term)
  }

  search() {
    this.searchButton().click()
  }

  refresh() {
    this.refreshButton().click()
  }

  createItem() {
    const itemName = `item-${Date.now()}`
    return this.createItemWithName(itemName)
  }

  createItemWithName(itemName) {
    this.lastCreatedItemName = itemName
    this.createdItemNames.push(itemName)

    this.openCreateModal()
    this.createModalTitle().should('be.visible')
    this.createItemInput().clear().type(itemName)
    this.saveButton().click()

    return cy.wrap(itemName)
  }

  createItems(itemNames) {
    itemNames.forEach((itemName) => {
      this.createItemWithName(itemName)
    })
  }

  createdItemRow() {
    return cy.contains('table tbody tr td', this.lastCreatedItemName).parents('tr').first()
  }

  createdItemNameCell() {
    return cy.contains('table tbody tr td', this.lastCreatedItemName)
  }

  createdItemDeleteButton() {
    return this.createdItemRow().find(bancoDadosElements.deleteItemButton)
  }

  createdItemArchiveButton() {
    return this.createdItemRow().find(bancoDadosElements.archiveItemButton)
  }

  createdItemShouldNotExist() {
    return this.itemShouldNotExistInCurrentTable(this.lastCreatedItemName)
  }

  itemShouldExistInCurrentTable(itemName) {
    return cy.contains(bancoDadosElements.tableCells, itemName)
  }

  itemShouldNotExistInCurrentTable(itemName) {
    return cy.get('body').then(($body) => {
      const cellsText = $body
        .find(bancoDadosElements.tableCells)
        .toArray()
        .map((cell) => Cypress.$(cell).text().trim())

      return !cellsText.includes(itemName)
    })
  }

  openCreateModal() {
    this.createButton().click()
    this.createModalTitle().should('be.visible')
  }

  saveWithoutName() {
    this.saveButton().click()
  }

  deleteFirstItem() {
    this.createdItemDeleteButton().click()
  }

  archiveFirstItem() {
    this.createdItemArchiveButton().click()
  }

  openArchived() {
    this.archivedTab().click()
  }

  resultMessage(message) {
    return cy.contains(message, { matchCase: false })
  }

  archivedTitle() {
    return cy.contains('h3', bancoDadosElements.archivedTitleText)
  }

}

export default BancoDadosPage
