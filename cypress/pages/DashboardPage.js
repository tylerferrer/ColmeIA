import dashboardElements from '../elements/dashboard.elements'

class DashboardPage {
  assertDashboardUrl() {
    cy.location('pathname').should('eq', '/dashboard')
  }

  assertCampanhaUrl() {
    cy.location('pathname').should('eq', '/dashboard/campanha')
  }

  assertBancoDeDadosUrl() {
    cy.location('pathname').should('eq', '/dashboard/campanha/bancos-de-dados')
  }

  assertColmeiaFormsUrl() {
    cy.location('pathname').should('eq', '/dashboard/campanha/colmeia-forms')
  }

  assertMainContentNotRendered() {
    cy.get(dashboardElements.mainContent).should('not.exist')
  }
}

export default DashboardPage
