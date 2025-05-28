export interface UserAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserDetails extends User {
  phone?: string;
  address?: UserAddress;
  bio?: string;
  joinDate: Date;
  lastActive: Date;
  status: 'active' | 'inactive' | 'suspended';
}

export interface UserListItem {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  avatar?: string;
  lastActive: Date;
}
