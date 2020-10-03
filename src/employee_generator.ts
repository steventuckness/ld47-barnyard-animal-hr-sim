import { Candidate } from './models/candidate';
import { Employee } from './models/employee';

export function generateEmployee(candidate: Candidate): Employee {
  return {
    ...candidate,
    employeeId: Math.floor(Math.random() * 100),
    salary: 10, // per day
  };
}
