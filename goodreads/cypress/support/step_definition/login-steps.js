/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
// check login button

Given('Verify that customers can browse the goodreads {string}', (url) => {
  cy.visit(url);
});

Then('Verify that customers can browse the goodreads sign in text',()=>{
  cy.contains('Sign In').should('have.text','Sign In').click();
})

Given('Verify that customers can browse the goodreads {string}', (url) => {
  cy.visit(url);
});

Then('Verify that customers can browse the goodreads sign in page',()=>{
  cy.contains('Sign in with email').should('be.visible').click();
});

Given('Verify that customers stay in login page {string}',(url)=>{
cy.visit(url);
});

Then('Verify that customers can browse the goodreads sign in page and verify the email input section {string}',(text)=>{
  cy.get('#ap_email').type(text);
});

Then('Verify that customers can browse the goodreads sign in page and verify the password input section {string}',(text)=>{
  cy.get('#ap_password').type(text);
});

Then('Verify that customers can browse the goodreads sign in page and verify the sign in button.',()=>{
  cy.xpath("//input[@id='signInSubmit']").should('be.visible').click();
});

Then('Verify that customers can browse the goodreads home page and  click the search bar section.',()=>{
  cy.xpath("(//input[@type='text'])[1]").type('How Google Works {enter}');
});

Then('Verify that customers can browse the goodreads.and click to want to read option.',()=>{
  cy.xpath('(//span[text()="Want to Read"])[1]').click();
});

Then('Verify that customers can browse the goodreads and click to My Book option.',()=>{
  cy.xpath("(//a[@href='/review/list/168563559?ref=nav_mybooks'])[2]").click();
});

Then('Verify that customers can browse the goodreads.and see my book list option and remove the list.',()=>{
  cy.get('.smallText > img').click();
});

Then('Verify that customers can browse the goodreads should be able to logout.',()=>{
  cy.get('.dropdown--profileMenu [alt]').click();
  cy.get('.siteHeader__subNav--profile [data-method]').click();
});

    