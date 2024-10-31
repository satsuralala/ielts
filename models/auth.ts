import { CustomerModel } from "./customer";

export interface LoginResponse {
  token: string;
  customer: CustomerModel;
}
