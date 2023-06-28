import { AttendanceInterface } from 'interfaces/attendance';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  company?: CompanyInterface;
  _count?: {
    attendance?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  company_id?: string;
}
