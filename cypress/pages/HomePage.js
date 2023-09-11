class HomePage {
    elements = {
      usernameInput: () => cy.get("#usernameInput"),
      passwordInput: () => cy.get("#passwordInput"),
      loginBtn: () => cy.get("button"),
     // errorMessage: () => cy.get('h3[data-test="error"]'),
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click({ force: true });
    }
  
    submitLogin(username,password){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click({ force: true });
    }
  }
  
  export const homePage = new HomePage();
  