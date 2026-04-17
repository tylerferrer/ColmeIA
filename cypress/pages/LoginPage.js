import loginElements from '../elements/login.elements'

class LoginPage {
  visit() {
    cy.visit('/')
  }

  emailInput() {
    return cy.get(loginElements.emailInput)
  }

  passwordInput() {
    return cy.get(loginElements.passwordInput)
  }

  loginButton() {
    return cy.contains('button[type="submit"], button', loginElements.loginButtonText)
  }

  forgotPasswordLink() {
    return cy.contains('a', loginElements.forgotPasswordLinkText)
  }

  continueButton() {
    return cy.contains('button', loginElements.continueButtonText)
  }

  fillEmail(email) {
    this.emailInput().clear().type(email)
  }

  fillPassword(password) {
    this.passwordInput().clear().type(password)
  }

  clearEmail() {
    this.emailInput().clear().blur()
  }

  clearPassword() {
    this.passwordInput().clear().blur()
  }

  fillCredentials(credentials) {
    this.fillEmail(credentials.email)
    this.fillPassword(credentials.password)
  }

  submit() {
    this.loginButton().click()
  }

  modalMessage(message) {
    return cy.contains(loginElements.messageContainer, message, { matchCase: false })
  }

  incorrectLoginModal() {
    return this.modalMessage(loginElements.incorrectLoginModalText)
  }

  invalidEmailMessage() {
    return cy.contains(loginElements.messageContainer, loginElements.invalidEmailMessageText)
  }

  invalidCredentialsMessage() {
    return cy.contains(loginElements.messageContainer, loginElements.invalidCredentialsMessageText)
  }

  requiredFieldMessages(message = loginElements.requiredFieldMessageText) {
    return cy
      .get(loginElements.messageContainer)
      .filter((_, element) => Cypress.$(element).text().trim() === message)
  }

  clickLink(label) {
    cy.contains(loginElements.interactiveElements, label, { matchCase: false }).click()
  }

  clickContinue() {
    this.continueButton().click()
  }

  continueAfterIncorrectLoginModal() {
    this.incorrectLoginModal().should('be.visible')
    this.clickContinue()
  }

  loginWithFixtureUser(userKey = 'validUser') {
    cy.fixture('users').then((users) => {
      const selectedUser = users[userKey]

      this.visit()
      this.fillCredentials(selectedUser)
      this.submit()
    })
  }

  fillEmailFromFixture(userKey = 'validUser') {
    cy.fixture('users').then((users) => {
      this.fillEmail(users[userKey].email)
      this.emailInput().blur()
    })
  }

  fillPasswordFromFixture(userKey = 'validUser') {
    cy.fixture('users').then((users) => {
      this.fillPassword(users[userKey].password)
    })
  }

  triggerRequiredValidation() {
    this.fillEmail('teste')
    this.clearEmail()
    this.fillPassword('123456')
    this.clearPassword()
  }
}

export default LoginPage
