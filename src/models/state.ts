import { Employee } from './employee';

export interface State {
  hired: Employee[];
  currentResume: Employee;
  money: number;
  currentDay: number;
  companyHapiness: number;
  companyProductivity: number;
}
