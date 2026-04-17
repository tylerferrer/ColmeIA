import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CandidatoPage from '../../pages/CandidatoPage'
import DashboardPage from '../../pages/DashboardPage'

const candidatoPage = new CandidatoPage()
const dashboardPage = new DashboardPage()

Given('que o dropdown de candidato esta disponivel no dashboard', () => {
  dashboardPage.assertDashboardUrl()
})

When('ele clica no dropdown de candidato', () => {
  candidatoPage.openDropdown()
})

Then('nao deve exibir opcoes do dropdown de candidato', () => {
  candidatoPage.hasVisibleDropdownOptions().should('be.false')
})

Then('deve permanecer na pagina principal sem executar acao', () => {
  dashboardPage.assertDashboardUrl()
})
