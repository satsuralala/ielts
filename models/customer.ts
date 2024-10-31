import { BaseModel } from "./base";

export interface CustomerModel extends BaseModel {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_active: boolean;
  profile_id: number;
  profile: File;
  password: string;
  moodle_pwd: string;
  moodle_id: number;
}
