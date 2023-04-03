class InventoryPage {
    elements = {
      logo: () => cy.get('.app_logo'),
    }
  
    verifyAppLogoExists() {
      this.elements.logo().should('be.visible').and('have.text', 'Swag Labs')
    }
  }
  
  export default InventoryPage;