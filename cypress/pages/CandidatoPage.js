import candidatoElements from '../elements/candidato.elements'

class CandidatoPage {
  dropdownButton() {
    return cy.contains(candidatoElements.dropdownButtonTargets, candidatoElements.dropdownButtonText)
  }

  openDropdown() {
    this.dropdownButton().click()
  }

  hasVisibleDropdownOptions() {
    return cy.get('body').then(($body) => {
      const options = $body.find(candidatoElements.dropdownOptions).filter(':visible')
      return options.length > 0
    })
  }
}

export default CandidatoPage
