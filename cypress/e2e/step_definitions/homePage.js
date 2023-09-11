import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {homePage} from '@pages/HomePage'
  import {firstPage} from '@pages/FirstPage'
  
  Given("A web browser is at the config application", () => {
    cy.visit("https://dev.configurator.win-deco.com/login");
  });
  
  When("the user enter the username {string} and password {string}", (username,password) => {
    homePage.submitLogin(username,password);}
  );

  Then("Verify the page message is {string} test", (message) => {
   cy.visit('https://dev.configurator.win-deco.com/')
   cy.reload()
   firstPage.elements.displayedMessageInPage().should("have.text",message);

    }
  );
 