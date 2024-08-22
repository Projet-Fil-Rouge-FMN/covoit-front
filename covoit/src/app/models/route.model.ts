
import { Address } from './address.model';


export interface Route {
  id: number;
  duration: number;
  kmTotal: number;
  startAddress: Address[];
  endAddress: Address[];
}
