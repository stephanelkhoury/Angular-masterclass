import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../../shared/models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, verify that there are no more pending requests
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should return expected users (HttpClient called once)', () => {
      const mockUsers: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
      ];

      // Make an HTTP request
      service.getUsers().subscribe(users => {
        expect(users).toEqual(mockUsers);
        expect(users.length).toBe(2);
      });

      // The following `expectOne()` will match the request's URL.
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
      
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');

      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUsers);
    });

    it('should be OK returning no users', () => {
      // Make an HTTP request
      service.getUsers().subscribe(users => {
        expect(users.length).toBe(0);
      });

      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
      req.flush([]); // Respond with empty array
    });
    
    it('should use cached data on subsequent calls', () => {
      const mockUsers: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
      ];
      
      // First call
      service.getUsers().subscribe(users => {
        expect(users).toEqual(mockUsers);
      });
      
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
      req.flush(mockUsers);
      
      // Second call should use cached data, no HTTP request
      service.getUsers().subscribe(users => {
        expect(users).toEqual(mockUsers);
      });
      
      // No additional requests should be made
      httpTestingController.expectNone('https://jsonplaceholder.typicode.com/users');
    });
    
    it('should handle errors', () => {
      const errorMsg = 'Deliberate 404 error';
      
      service.getUsers().subscribe({
        next: users => fail('Expected an error, not users'),
        error: error => expect(error.status).toEqual(500)
      });
      
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
      
      // Respond with mock error
      req.flush(errorMsg, { status: 500, statusText: 'Server Error' });
    });
  });

  describe('getUserById', () => {
    it('should return a single user', () => {
      const mockUser: User = { id: 1, name: 'John Doe', email: 'john@example.com' };
      
      service.getUserById(1).subscribe(user => {
        expect(user).toEqual(mockUser);
      });
      
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1');
      expect(req.request.method).toEqual('GET');
      req.flush(mockUser);
    });
    
    it('should use cached data if available', () => {
      const mockUsers: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
      ];
      
      // First populate cache
      service.getUsers().subscribe();
      httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users').flush(mockUsers);
      
      // Then request specific user
      service.getUserById(1).subscribe(user => {
        expect(user).toEqual(mockUsers[0]);
      });
      
      // No HTTP request should be made for getUserById
      httpTestingController.expectNone('https://jsonplaceholder.typicode.com/users/1');
    });
  });

  describe('addUser', () => {
    it('should add a user and return it', () => {
      const newUser: User = { id: 3, name: 'Test User', email: 'test@example.com' };
      
      service.addUser(newUser).subscribe(user => {
        expect(user).toEqual(newUser);
      });
      
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(newUser);
      req.flush(newUser);
    });
  });

  describe('updateUser', () => {
    it('should update a user and return the updated user', () => {
      const updatedUser: User = { id: 1, name: 'Updated Name', email: 'updated@example.com' };
      
      service.updateUser(updatedUser).subscribe(user => {
        expect(user).toEqual(updatedUser);
      });
      
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1');
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(updatedUser);
      req.flush(updatedUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', () => {
      service.deleteUser(1).subscribe(response => {
        expect(response).toBeUndefined();
      });
      
      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1');
      expect(req.request.method).toEqual('DELETE');
      req.flush(null);
    });
  });

  describe('clearCache', () => {
    it('should clear the user cache', () => {
      const mockUsers: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' }
      ];
      
      // First call to populate cache
      service.getUsers().subscribe();
      httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users').flush(mockUsers);
      
      // Clear cache
      service.clearCache();
      
      // Next call should make an HTTP request
      service.getUsers().subscribe();
      httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    });
  });
});
