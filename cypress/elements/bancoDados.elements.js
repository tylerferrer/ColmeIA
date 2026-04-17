const bancoDadosElements = {
  searchInput: 'input[type="search"][placeholder="Pesquisar"]',
  searchButton: 'button[type="button"].flex-shrink-0',
  createButtonText: /^Criar$/i,
  createModalTitleText: /^Adicionar novo item$/i,
  createItemInput: 'input[type="text"][placeholder="Nome do item"]',
  saveButtonText: /^Salvar$/i,
  iconButtons: 'button[data-variant="icon"]',
  refreshIconPathFragment: '17.65 6.35',
  archivedIconPathFragment: 'M20 2H4',
  resultsArea: 'table',
  listItems: 'table tbody tr',
  tableCells: 'table tbody tr td',
  deleteItemButton: 'button[title="Apagar"]',
  archiveItemButton: 'button[title="Arquivar"]',
  validationMessageTargets: 'p, span, div',
  emptyStateTargets: 'td, p, span, div',
  emptyDatabaseMessageText: /Nenhum banco de dados encontrado/i,
  archivedTitleText: /^Itens Arquivados$/i
}

export default bancoDadosElements
