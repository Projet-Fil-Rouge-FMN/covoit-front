// src/app/models/user-account.model.ts

export interface UserAccount {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  driverLicence: boolean;
  password: string;
}
