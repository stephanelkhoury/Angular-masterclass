// E2E Test for Authentication Flow

describe('Authentication', () => {
  beforeEach(() => {
    // Load test data from fixtures
    cy.fixture('users.json').as('userData');
  });

  it('should allow valid user to login', function() {
    const user = this.userData.validUser;
    
    // Visit login page
    cy.visit('/login');
    
    // Verify login form is displayed
    cy.get('[data-test="login-form"]').should('be.visible');
    cy.get('h1').should('contain', 'Login');
    
    // Fill in login form
    cy.get('[data-test="email-input"]').type(user.email);
    cy.get('[data-test="password-input"]').type(user.password);
    
    // Submit form
    cy.get('[data-test="login-button"]').click();
    
    // Verify successful login
    cy.url().should('not.include', '/login');
    cy.get('[data-test="user-menu"]').should('be.visible');
    cy.get('[data-test="user-name"]').should('contain', user.name);
    
    // Verify local storage token exists
    cy.window().its('localStorage')
      .invoke('getItem', 'auth_token')
      .should('exist');
  });

  it('should show error message for invalid credentials', function() {
    const user = this.userData.invalidUser;
    
    cy.visit('/login');
    cy.get('[data-test="email-input"]').type(user.email);
    cy.get('[data-test="password-input"]').type(user.password);
    cy.get('[data-test="login-button"]').click();
    
    // Verify error message is displayed
    cy.get('[data-test="login-error"]')
      .should('be.visible')
      .and('contain', 'Invalid email or password');
    
    // Verify we're still on login page
    cy.url().should('include', '/login');
    
    // Verify no token was created
    cy.window().its('localStorage')
      .invoke('getItem', 'auth_token')
      .should('not.exist');
  });

  it('should redirect to login when accessing protected page', () => {
    // Try to access a protected route directly
    cy.visit('/account');
    
    // Should be redirected to login page
    cy.url().should('include', '/login');
    
    // Should show a message about why they're redirected
    cy.get('[data-test="auth-message"]')
      .should('be.visible')
      .and('contain', 'Please login to access this page');
  });

  it('should allow user to register a new account', () => {
    // Generate a random email to avoid conflicts
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;
    
    // Visit registration page
    cy.visit('/register');
    
    // Fill in registration form
    cy.get('[data-test="name-input"]').type('New User');
    cy.get('[data-test="email-input"]').type(randomEmail);
    cy.get('[data-test="password-input"]').type('Password123!');
    cy.get('[data-test="confirm-password-input"]').type('Password123!');
    
    // Submit form
    cy.get('[data-test="register-button"]').click();
    
    // Verify successful registration
    cy.url().should('include', '/login');
    cy.get('[data-test="success-message"]')
      .should('be.visible')
      .and('contain', 'Registration successful');
  });

  it('should allow user to logout', function() {
    const user = this.userData.validUser;
    
    // Login first
    cy.login(user.email, user.password);
    
    // Verify we're logged in
    cy.get('[data-test="user-menu"]').should('be.visible');
    
    // Click the logout button
    cy.get('[data-test="user-menu"]').click();
    cy.get('[data-test="logout-button"]').click();
    
    // Verify logout was successful
    cy.url().should('include', '/login');
    cy.window().its('localStorage')
      .invoke('getItem', 'auth_token')
      .should('not.exist');
    
    // Try to access a protected route
    cy.visit('/account');
    cy.url().should('include', '/login');
  });
});
