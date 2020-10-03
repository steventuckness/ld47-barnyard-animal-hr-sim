import { Employee } from "./models/employee";

/**
 * An employee is happy if she is around people of the same species and
 * personality.
 */
export const employeeHappiness = 
  (hired: Employee[]) => (employee: Employee): number => {
    return 0;
};

/**
 * The overall company hapiness is the average hapiness of a single employee.
 */
export const companyHapiness = (hired: Employee[]): number =>
  hired.map(employeeHappiness(hired)).reduce((a, b) => a + b) / hired.length;


export const dailyIncome = (hired: Employee[]) : number => 0;

export const dailyExpenses = (hired: Employee[]) : number => 0;

/**
 * Calculates the daily profit based on the employees currently at the company. The skill determines the income, and the sum of salaries determines the expenses.
 */
export const dailyProfit = (hired: Employee[]): number => 
  dailyIncome(hired) - dailyExpenses(hired);
