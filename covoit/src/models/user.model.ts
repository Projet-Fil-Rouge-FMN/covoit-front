export interface User {
  id: number;
  userName: string;
  lastName: string;
  password: string;
  email: string;
  driverLicence: boolean;
  authorities: string[];
}
