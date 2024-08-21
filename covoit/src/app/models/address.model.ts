import Route from 'route.models';
export interface Address {
  id: number;
  detail: string;
  city: string;
  country: string;
  routes: Route[];
}
