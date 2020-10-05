import { Candidate } from './candidate';

export interface Employee extends Candidate {
    employeeId: number;
}

export default Employee;
