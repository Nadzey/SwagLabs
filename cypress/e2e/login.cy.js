import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

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
    inventoryPage.verifyAppLogoExists()
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