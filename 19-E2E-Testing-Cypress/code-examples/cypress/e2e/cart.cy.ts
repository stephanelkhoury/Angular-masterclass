// E2E Test for Shopping Cart functionality

describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.fixture('products.json').as('productsData');
    cy.fixture('users.json').as('userData');
    
    // Start with an empty cart for each test
    cy.clearLocalStorage('cart');
    cy.visit('/');
  });
  
  it('should allow adding products to cart', function() {
    // Add first product to cart
    const product = this.productsData[0];
    cy.visit('/products');
    cy.contains('[data-test="product-card"]', product.name).within(() => {
      cy.get('[data-test="add-to-cart-button"]').click();
    });
    
    // Verify cart notification appears
    cy.get('[data-test="cart-notification"]')
      .should('be.visible')
      .and('contain', `${product.name} added to cart`);
    
    // Check cart count updated
    cy.get('[data-test="cart-count"]').should('contain', '1');
    
    // Go to cart page
    cy.get('[data-test="cart-icon"]').click();
    cy.url().should('include', '/cart');
    
    // Verify product is in cart
    cy.get('[data-test="cart-item"]')
      .should('have.length', 1)
      .and('contain', product.name);
    
    // Verify price is correct
    cy.get('[data-test="cart-item-price"]').should('contain', product.price);
    
    // Verify subtotal
    cy.get('[data-test="cart-subtotal"]').should('contain', product.price);
  });
  
  it('should update quantity and totals when changing item quantity', function() {
    const product = this.productsData[0];
    
    // Add product to cart first
    cy.addToCart(product.name);
    cy.get('[data-test="cart-icon"]').click();
    
    // Change quantity to 2
    cy.get('[data-test="quantity-input"]').clear().type('2');
    cy.get('[data-test="update-quantity-button"]').click();
    
    // Verify quantity updated
    cy.get('[data-test="quantity-input"]').should('have.value', '2');
    
    // Verify subtotal updated (price × 2)
    const expectedSubtotal = (product.price * 2).toFixed(2);
    cy.get('[data-test="cart-subtotal"]').should('contain', expectedSubtotal);
  });
  
  it('should remove items from cart', function() {
    const product = this.productsData[0];
    
    // Add product to cart first
    cy.addToCart(product.name);
    cy.get('[data-test="cart-icon"]').click();
    
    // Verify item is in cart
    cy.get('[data-test="cart-item"]').should('exist');
    
    // Remove item
    cy.get('[data-test="remove-item-button"]').click();
    
    // Verify cart is empty
    cy.get('[data-test="empty-cart-message"]').should('be.visible');
    cy.get('[data-test="cart-item"]').should('not.exist');
    cy.get('[data-test="cart-count"]').should('contain', '0');
  });
  
  it('should proceed to checkout when cart has items', function() {
    const user = this.userData.validUser;
    
    // Login first
    cy.login(user.email, user.password);
    
    // Add a product to cart
    cy.addToCart(this.productsData[0].name);
    
    // Go to cart
    cy.get('[data-test="cart-icon"]').click();
    
    // Click checkout button
    cy.get('[data-test="checkout-button"]').click();
    
    // Verify we're on the checkout page
    cy.url().should('include', '/checkout');
    
    // Verify user info is pre-filled
    cy.get('[data-test="checkout-email"]').should('have.value', user.email);
  });
  
  it('should not allow checkout when cart is empty', () => {
    // Go to cart with no items
    cy.visit('/cart');
    
    // Verify checkout button is disabled
    cy.get('[data-test="checkout-button"]').should('be.disabled');
  });
  
  it('should save cart items for returning users', function() {
    const product = this.productsData[0];
    
    // Add product to cart
    cy.addToCart(product.name);
    
    // Verify cart has 1 item
    cy.get('[data-test="cart-count"]').should('contain', '1');
    
    // Reload page
    cy.reload();
    
    // Verify cart still has the item
    cy.get('[data-test="cart-count"]').should('contain', '1');
    
    // Go to cart and verify product is still there
    cy.get('[data-test="cart-icon"]').click();
    cy.get('[data-test="cart-item"]').should('contain', product.name);
  });
});
