import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../pages/LoginPage'
import RecuperacaoSenhaPage from '../../pages/RecuperacaoSenhaPage'

const loginPage = new LoginPage()
const recuperacaoSenhaPage = new RecuperacaoSenhaPage()

When('ele clica em {string}', (label) => {
  loginPage.clickLink(label)
})

Then('deve permanecer na tela de login sem redirecionamento para recuperacao', () => {
  cy.location('pathname').should('not.match', recuperacaoSenhaPage.expectedPathPattern())
  cy.location('pathname').should('eq', '/')
})
