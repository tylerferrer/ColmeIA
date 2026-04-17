import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

Cypress.Commands.add('loginWithBugFlow', () => {
  loginPage.loginWithFixtureUser('validUser')
  loginPage.continueAfterIncorrectLoginModal()
  dashboardPage.assertDashboardUrl()
})
