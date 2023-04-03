class LoginPage {

  elements = {
    txtUsername: () => cy.get('#user-name'),
    txtPassword: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button'),
    errorMSG: () => cy.get("h3[data-test='error']")

  }
    visit() {
      cy.visit('/')
    }
  
    fillLoginForm(username, password) {
      this.elements.txtUsername().type(username)
      this.elements.txtPassword().type(password)
    }
  
    submitLoginForm() {
      this.elements.loginButton().click()
    }
  
    getErrorMessage() {
      return this.elements.errorMSG()
    }
  }
  
  export default LoginPage;