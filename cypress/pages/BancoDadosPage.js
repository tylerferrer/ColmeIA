import bancoDadosElements from '../elements/bancoDados.elements'

class BancoDadosPage {
  constructor() {
    this.lastCreatedItemName = null
  }

  searchInput() {
    return cy.get(bancoDadosElements.searchInput).first()
  }

  searchButton() {
    return cy.get(bancoDadosElements.searchButton).first()
  }

  refreshButton() {
    return cy.get(bancoDadosElements.refreshButton).eq(0)
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
    return cy.contains(
      bancoDadosElements.emptyStateTargets,
      bancoDadosElements.emptyDatabaseMessageText
    )
  }

  mainTableWithoutData() {
    return cy.get('body').then(($body) => $body.find(bancoDadosElements.listItems).length === 0)
  }

  deleteButton() {
    return cy.get(bancoDadosElements.deleteItemButton).first()
  }

  archiveButton() {
    return cy.get(bancoDadosElements.archiveItemButton).first()
  }

  archivedTab() {
    return cy.get(bancoDadosElements.archivedButton).eq(1)
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
    this.lastCreatedItemName = itemName

    this.openCreateModal()
    this.createModalTitle().should('be.visible')
    this.createItemInput().clear().type(itemName)
    this.saveButton().click()
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
    return cy.get('body').then(($body) => !$body.text().includes(this.lastCreatedItemName))
  }

  openCreateModal() {
    this.createButton().click()
    this.createModalTitle().should('be.visible')
  }

  saveWithoutName() {
    this.saveButton().click()
  }

  deleteFirstItem() {
    this.deleteButton().click()
  }

  archiveFirstItem() {
    this.archiveButton().click()
  }

  openArchived() {
    this.archivedTab().click()
  }

  resultMessage(message) {
    return cy.contains(message, { matchCase: false })
  }

}

export default BancoDadosPage
