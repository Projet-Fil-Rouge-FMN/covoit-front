import { Brand } from "./brand.model";
import { Category } from "./category.model";
import { VehicleModel } from "./vehicleModel.model";

export interface Vehicle {
    id: number;
    registration: string;
    numberSeat: number;
    brand:Brand;
    model:VehicleModel;
    category:Category;
  }