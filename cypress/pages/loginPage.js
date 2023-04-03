class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/')
    }
  
    fillLoginForm(username, password) {
      cy.get('#user-name').type(username)
      cy.get('#password').type(password)
    }
  
    submitLoginForm() {
      cy.get('#login-button').click()
    }
  
    getErrorMessage() {
      return cy.get('.error-message-container')
    }
  }
  
  export default LoginPage;