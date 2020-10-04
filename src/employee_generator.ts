import { random } from 'faker';
import { Candidate } from './models/candidate';
import { Employee } from './models/employee';

export function generateEmployee(candidate: Candidate): Employee {
    return {
        ...candidate,
        employeeId: Math.floor(Math.random() * 100),
    };
}
