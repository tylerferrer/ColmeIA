import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import MenuPage from '../../pages/MenuPage'
import DashboardPage from '../../pages/DashboardPage'

const menuPage = new MenuPage()
const dashboardPage = new DashboardPage()

Given('que o menu lateral esta aberto', () => {
  menuPage.openMenu()
  dashboardPage.assertCampanhaUrl()
})

When('ele clica no botao do menu lateral', () => {
  menuPage.toggleMenu()
})

When('ele clica novamente no botao do menu lateral', () => {
  menuPage.toggleMenu()
})

When('ele clica na opcao {string}', (option) => {
  menuPage.clickMenuOption(option)
})

Then('o menu deve ser exibido', () => {
  menuPage.sideMenu().should('be.visible')
  dashboardPage.assertCampanhaUrl()
})

Then('o menu deve ser fechado', () => {
  menuPage.sideMenu().should('not.be.visible')
  dashboardPage.assertDashboardUrl()
})

Then('o menu deve permanecer aberto mesmo apos o segundo clique', () => {
  menuPage.sideMenu().should('be.visible')
  dashboardPage.assertCampanhaUrl()
})

Then('deve exibir a url de Colmeia Forms sem conteudo principal renderizado', () => {
  dashboardPage.assertColmeiaFormsUrl()
  dashboardPage.assertMainContentNotRendered()
})
