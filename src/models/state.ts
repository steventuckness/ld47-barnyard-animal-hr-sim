import { Candidate } from './candidate';
import { Employee } from './employee';

export interface State {
    hired: Employee[];
    candidate: Candidate;
    money: number;
    currentDay: number;
    companyHapiness: number;
    companyProductivity: number;
}
