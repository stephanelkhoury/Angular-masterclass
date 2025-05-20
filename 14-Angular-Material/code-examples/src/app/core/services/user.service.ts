import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserDetails, UserListItem } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';
  
  // Mock users data
  private mockUsers: UserDetails[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      avatar: 'assets/images/avatars/avatar-1.png',
      phone: '(555) 123-4567',
      bio: 'Senior Administrator with 5+ years of experience in system management and team leadership.',
      joinDate: new Date('2020-01-15'),
      lastActive: new Date('2023-06-10T14:30:00'),
      createdAt: new Date('2020-01-15'),
      updatedAt: new Date('2023-06-10'),
      status: 'active',
      address: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        country: 'USA'
      }
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'Manager',
      avatar: 'assets/images/avatars/avatar-2.png',
      phone: '(555) 987-6543',
      bio: 'Marketing Manager with expertise in digital marketing campaigns and brand management.',
      joinDate: new Date('2021-03-22'),
      lastActive: new Date('2023-06-09T10:15:00'),
      createdAt: new Date('2021-03-22'),
      updatedAt: new Date('2023-06-09'),
      status: 'active',
      address: {
        street: '456 Market St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        country: 'USA'
      }
    },
    {
      id: '3',
      firstName: 'Robert',
      lastName: 'Johnson',
      email: 'robert.johnson@example.com',
      role: 'User',
      avatar: 'assets/images/avatars/avatar-3.png',
      phone: '(555) 345-6789',
      bio: 'Content creator and technical writer specialized in technology trends.',
      joinDate: new Date('2022-01-10'),
      lastActive: new Date('2023-06-01T09:45:00'),
      createdAt: new Date('2022-01-10'),
      updatedAt: new Date('2023-06-01'),
      status: 'inactive',
      address: {
        street: '789 Powell St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94108',
        country: 'USA'
      }
    },
    {
      id: '4',
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily.davis@example.com',
      role: 'Developer',
      avatar: 'assets/images/avatars/avatar-4.png',
      phone: '(555) 567-8901',
      bio: 'Full-stack developer with expertise in Angular, React, and Node.js.',
      joinDate: new Date('2021-08-15'),
      lastActive: new Date('2023-06-08T16:20:00'),
      createdAt: new Date('2021-08-15'),
      updatedAt: new Date('2023-06-08'),
      status: 'active',
      address: {
        street: '321 Pine St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94104',
        country: 'USA'
      }
    },
    {
      id: '5',
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      role: 'Designer',
      avatar: 'assets/images/avatars/avatar-5.png',
      phone: '(555) 234-5678',
      bio: 'UI/UX Designer passionate about creating intuitive user experiences.',
      joinDate: new Date('2022-03-01'),
      lastActive: new Date('2023-05-28T11:30:00'),
      createdAt: new Date('2022-03-01'),
      updatedAt: new Date('2023-05-28'),
      status: 'suspended',
      address: {
        street: '555 Mission St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        country: 'USA'
      }
    }
  ];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserListItem[]> {
    // In a real app, this would call the API
    // return this.http.get<UserListItem[]>(this.apiUrl);
    
    // For demo, we transform our mock users to UserListItems
    const userList: UserListItem[] = this.mockUsers.map(user => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.role,
      status: user.status,
      avatar: user.avatar,
      lastActive: user.lastActive
    }));
    
    return of(userList).pipe(delay(800)); // Simulate network delay
  }

  getUserById(id: string): Observable<UserDetails | undefined> {
    // In a real app, this would call the API
    // return this.http.get<UserDetails>(`${this.apiUrl}/${id}`);
    
    // For demo, we return the mock user with the matching ID
    const user = this.mockUsers.find(user => user.id === id);
    return of(user).pipe(delay(800)); // Simulate network delay
  }

  createUser(user: Partial<UserDetails>): Observable<UserDetails> {
    // In a real app, this would call the API
    // return this.http.post<UserDetails>(this.apiUrl, user);
    
    // For demo, we create a new user with a unique ID
    const newUser: UserDetails = {
      id: Date.now().toString(),
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      role: user.role || 'User',
      status: user.status || 'active',
      joinDate: new Date(),
      lastActive: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...user
    };
    
    this.mockUsers.push(newUser);
    
    return of(newUser).pipe(delay(800)); // Simulate network delay
  }

  updateUser(id: string, user: Partial<UserDetails>): Observable<UserDetails> {
    // In a real app, this would call the API
    // return this.http.put<UserDetails>(`${this.apiUrl}/${id}`, user);
    
    // For demo, we update the existing user
    const index = this.mockUsers.findIndex(u => u.id === id);
    
    if (index !== -1) {
      const updatedUser: UserDetails = {
        ...this.mockUsers[index],
        ...user,
        updatedAt: new Date()
      };
      
      this.mockUsers[index] = updatedUser;
      return of(updatedUser).pipe(delay(800)); // Simulate network delay
    }
    
    throw new Error('User not found');
  }

  deleteUser(id: string): Observable<void> {
    // In a real app, this would call the API
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    
    // For demo, we remove the user from our mock data
    const index = this.mockUsers.findIndex(user => user.id === id);
    
    if (index !== -1) {
      this.mockUsers.splice(index, 1);
    }
    
    return of(undefined).pipe(delay(800)); // Simulate network delay
  }
}
