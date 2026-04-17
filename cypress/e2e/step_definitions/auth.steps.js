import { Given } from '@badeball/cypress-cucumber-preprocessor'
import DashboardPage from '../../pages/DashboardPage'

const dashboardPage = new DashboardPage()

Given('que o usuario esta logado', () => {
  cy.loginWithBugFlow()
})

Given('que o usuario esta no dashboard principal', () => {
  cy.loginWithBugFlow()
  dashboardPage.assertDashboardUrl()
})
