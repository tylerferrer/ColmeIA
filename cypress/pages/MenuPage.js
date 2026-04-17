import menuElements from '../elements/menu.elements'

class MenuPage {
  menuButton() {
    return cy.get(menuElements.menuButton).first()
  }

  sideMenu() {
    return cy.get(menuElements.sideMenu).filter(':visible').first()
  }

  toggleMenu() {
    this.menuButton().click()
  }

  openMenu() {
    this.toggleMenu()
    this.sideMenu().should('be.visible')
  }

  clickMenuOption(option) {
    cy.contains(menuElements.menuOptionTargets, option, { matchCase: false }).click()
  }

  bancoDeDadosLink() {
    return cy.get(menuElements.bancoDeDadosLink)
  }

  colmeiaFormsLink() {
    return cy.get(menuElements.colmeiaFormsLink)
  }
}

export default MenuPage
