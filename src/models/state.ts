import { Employee } from './employee';
import { Resume } from './resume';

export interface State {
  hired: Employee[];
  currentResume: ;
  money: number;
  currentDay: number;
  companyHapiness: number;
  companyProductivity: number;
}
