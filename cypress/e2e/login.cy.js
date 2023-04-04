import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'

describe('Swag Labs Login', () => {
  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('Successful Login', () => {
    cy.fixture('userData').then(data => {
    loginPage.fillLoginForm(data.standardUser.username, data.standardUser.password)
    loginPage.submitLoginForm()
    cy.url().should('include', '/inventory.html')
    inventoryPage.elements.logo().should('be.visible').and('have.text', data.logoText)
    })
  })

  it('Failed Login', () => {
    cy.fixture('userData').then(data => {
    loginPage.fillLoginForm(data.lockedOutUser.username, data.lockedOutUser.password)
    loginPage.submitLoginForm()
    loginPage.getErrorMessage().should('contain', data.errorMSG)
    })
  })
})