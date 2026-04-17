const bancoDadosElements = {
  searchInput: 'input[type="search"][placeholder="Pesquisar"]',
  searchButton: 'button[type="button"].flex-shrink-0',
  createButtonText: /^Criar$/i,
  createModalTitleText: /^Adicionar novo item$/i,
  createItemInput: 'input[type="text"][placeholder="Nome do item"]',
  saveButtonText: /^Salvar$/i,
  refreshButton: 'button[data-variant="icon"]',
  archivedButton: 'button[data-variant="icon"]',
  resultsArea: 'table',
  listItems: 'table tbody tr',
  deleteItemButton: 'button[title="Apagar"]',
  archiveItemButton: 'button[title="Arquivar"]',
  validationMessageTargets: 'p, span, div',
  emptyStateTargets: 'td, p, span, div',
  emptyDatabaseMessageText: /Nenhum banco de dados encontrado/i
}

export default bancoDadosElements
