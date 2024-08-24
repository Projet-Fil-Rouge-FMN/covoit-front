import { ServiceVehicle } from './serviceVehicle.model';
import { User } from './user.model';

export interface Booking {
  id: number;
  startTime: string;
  endTime: string;
  driver: User;
  serviceVehicle: ServiceVehicle;
}
