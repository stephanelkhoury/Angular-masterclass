# Angular Routing - Code Examples

This project demonstrates the concepts covered in Chapter 10: Angular Routing. It includes examples of:

- Basic routing configuration
- Route parameters and query parameters
- Child routes
- Route guards (CanActivate, CanDeactivate)
- Route resolvers
- Lazy loading
- Navigation events

## Project Structure

The project is structured to showcase different routing concepts:

- **Home**: Simple landing page with navigation options
- **Products**: Demonstrates route parameters, query parameters, and resolvers
  - **Product List**: Shows filtering with query parameters
  - **Product Detail**: Shows route parameters and navigation between related items
  - **Product Edit**: Demonstrates CanDeactivate guard for unsaved changes
- **Admin**: Protected route using AuthGuard (CanActivate)
- **User Module**: Lazily loaded module with nested routes
- **404 Page**: Demonstrates wildcard route

## Key Files

- `app-routing.module.ts`: Main routing configuration
- `guards/auth.guard.ts`: Route protection with CanActivate
- `guards/can-deactivate.guard.ts`: Unsaved changes protection
- `resolvers/product.resolver.ts`: Pre-fetching data before navigation
- `modules/user/user-routing.module.ts`: Feature module routing with lazy loading

## Running the Example

1. Navigate to the code-examples directory:
   ```
   cd 10-Angular-Routing/code-examples
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## Demo Credentials

For testing the authentication features:
- Email: admin@example.com
- Password: password

## Implementation Notes

- The backend API calls are mocked using in-memory data
- Navigation events are logged to the console
- The CanDeactivate guard will prompt before leaving unsaved forms
- Route resolvers ensure data is available before the component loads
