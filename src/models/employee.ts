import { Candidate } from './candidate';

export interface Employee extends Candidate {
  employeeId: number;
  salary: number; // per day
}

export default Employee;