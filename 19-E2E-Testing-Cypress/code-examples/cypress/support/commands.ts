// ***********************************************
// This example commands.ts shows you how to create various custom commands 
// and overwrite existing commands.
//
// For more comprehensive examples of custom commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login to the application
     * @example cy.login('user@example.com', 'password123')
     */
    login(email: string, password: string): void
    
    /**
     * Custom command to select a product from the catalog
     * @example cy.selectProduct('Headphones')
     */
    selectProduct(productName: string): void
    
    /**
     * Custom command to add a product to cart
     * @example cy.addToCart('Headphones', 2)
     */
    addToCart(productName: string, quantity?: number): void
    
    /**
     * Custom command to check that the cart contains an expected number of items
     * @example cy.checkCartCount(3)
     */
    checkCartCount(expectedCount: number): void
  }
}

// Login command
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('[data-test="email-input"]').type(email);
  cy.get('[data-test="password-input"]').type(password);
  cy.get('[data-test="login-button"]').click();
  
  // Verify successful login
  cy.url().should('not.include', '/login');
  cy.get('[data-test="user-menu"]').should('be.visible');
});

// Select a product command
Cypress.Commands.add('selectProduct', (productName: string) => {
  cy.visit('/products');
  cy.contains('[data-test="product-card"]', productName).click();
  
  // Verify product page loaded
  cy.get('[data-test="product-title"]').should('contain', productName);
});

// Add to cart command
Cypress.Commands.add('addToCart', (productName: string, quantity = 1) => {
  cy.selectProduct(productName);
  
  if (quantity > 1) {
    cy.get('[data-test="quantity-input"]').clear().type(quantity.toString());
  }
  
  cy.get('[data-test="add-to-cart-button"]').click();
  cy.get('[data-test="cart-notification"]').should('be.visible');
});

// Check cart count command
Cypress.Commands.add('checkCartCount', (expectedCount: number) => {
  cy.get('[data-test="cart-count"]').should('have.text', expectedCount.toString());
});
