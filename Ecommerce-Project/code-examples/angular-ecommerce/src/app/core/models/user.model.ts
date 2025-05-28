export interface User {
  id: string;
  email: string;
  name: string;
  firstName: string;
  isAdmin: boolean;
  avatar?: string;
  phone?: string;
  addresses?: Address[];
  defaultAddressId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
  expiresIn: number;
}
