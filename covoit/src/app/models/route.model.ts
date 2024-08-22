//import Address from Address.model.ts

export interface Route {
  id: number;
  duration: number;
  kmTotal: number;
  startAddress: Address[];
  endAddress: Address[];
}
