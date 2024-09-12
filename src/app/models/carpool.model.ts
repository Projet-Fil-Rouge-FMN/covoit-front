import { Route } from '../models/route.model';
import { User } from '../models/user.model';
import { Vehicle } from '../models/vehicle.model';
export interface Carpool {
  id: number;
  availableSeat: number;
  startDate: string;
  vehicle: Vehicle;
  route: Route;
  user: User[];
}
