import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

Given('que o usuario acessa a pagina de login', () => {
  loginPage.visit()
})

When('ele realiza login com credenciais validas', () => {
  loginPage.loginWithFixtureUser('validUser')
})

When('ele realiza login com credenciais invalidas', () => {
  loginPage.loginWithFixtureUser('invalidUser')
})

When('ele preenche um email com formato invalido', () => {
  loginPage.fillEmailFromFixture('invalidEmailFormat')
})

When('ele preenche e limpa os campos de email e senha', () => {
  loginPage.triggerRequiredValidation()
})

When('ele preenche a senha do usuario valido', () => {
  loginPage.fillPasswordFromFixture('validUser')
})

When('ele preenche o email {string}', (email) => {
  loginPage.fillEmail(email)
})

When('ele preenche a senha {string}', (password) => {
  loginPage.fillPassword(password)
})

When('ele clica no botao de login', () => {
  loginPage.submit()
})

Then('deve exibir o modal com a mensagem {string}', (message) => {
  loginPage.modalMessage(message).should('be.visible')
})

Then('deve redirecionar o usuario para a area autenticada', () => {
  dashboardPage.assertDashboardUrl()
})

Then('deve exibir mensagem de email invalido', () => {
  loginPage.invalidEmailMessage().should('be.visible')
})

Then('deve exibir mensagem de dados invalidos', () => {
  loginPage.invalidCredentialsMessage().should('be.visible')
})

Then('deve exibir a mensagem obrigatoria {string} em {int} campos', (message, total) => {
  loginPage.requiredFieldMessages(message).should('have.length', total)
})
