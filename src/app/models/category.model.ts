import { Vehicle } from './vehicle.model';

export interface Category {
  id: number;
  name: string;
  vehicles: Vehicle[];
}
