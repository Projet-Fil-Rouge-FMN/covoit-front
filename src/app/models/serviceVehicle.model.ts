import { Brand } from './brand.model';
import { VehicleModel } from './vehicleModel.model';
import { Category } from './category.model';

export interface ServiceVehicle {
  id: number;
  registration: string;
  nbSeat: number;
  brand: Brand;
  model: VehicleModel;
  category: Category;
  state: string;
  picture: string;
  motorization: string;
  co2Km: number;
}
