import { Employee } from "./models/employee";

type FreqDict = {[id: string]: number};

/**
 * Returns a new dict with only the specified keys.
 */
const filterDictByKeys = (keys: string[], dict: FreqDict) =>
  Object.keys(dict).reduce(
    (result, key) => keys.indexOf(key) === -1 ? result : {...result, [key]: dict[key] },
    {} as FreqDict
  );

/**
 * Counts the occurrence of values in items. Also known as
 * a frequency table.
 */
const frequency = (items: string[]): FreqDict =>
  items.reduce((result, item) => 
    result[item] 
    ? {...result, [item]: result[item] + 1} 
    : {...result, [item]: 1 }
    , {} as FreqDict);


/**
 * Sums entries from two frequency tables.
 */
const sumFreqs = (dictA: FreqDict, dictB: FreqDict): FreqDict => {
  const allKeys = Object.keys(dictA).concat(Object.keys(dictB));
  const allKeysUnique = Array.from(new Set(allKeys));
  return allKeysUnique.reduce(
    (result, k) => ({...result, [k]: (dictA[k] || 0) + (dictB[k] || 0)}),
    {} as FreqDict
  ); 
};

/**
 * Divides all frequencies by a scalar.
 */
const divideFreqs = (dict: FreqDict, num: number): FreqDict =>
  Object.keys(dict).reduce(
    (res, k) => ({...res, [k]: dict[k] / num}), {} as FreqDict);

/**
 * Frequency table of all personalities in the company.
 */
const companyPersonalityFreq = (employees: Employee[]): FreqDict =>
  employees.reduce((freq, emp) => 
    sumFreqs(freq, frequency(emp.personality))
    , {} as FreqDict
  );


/**
 * An employee is happy if she is around people of the same species and
 * personality. The result is the average of the sum of the ratio of species and 
 * personalities of her same type that occur in the company.
 *
 * Because it's an average of ratios, it will be normalized by default (fall
 * between 0 and 1).
 * 
 */
export const employeeHappiness = 
  (hired: Employee[]) => (employee: Employee): number => {
    const personalityFreq   = companyPersonalityFreq(hired);
    const personalityRatios = divideFreqs(personalityFreq, hired.length);
    const speciesFreq       = frequency(hired.map((e) => e.species));
    const speciesRatios     = divideFreqs(speciesFreq, hired.length);
    const myPersonalitiesRt = filterDictByKeys(employee.personality, personalityRatios);
    const mySpeciesRt       = filterDictByKeys([employee.species], speciesRatios);

    const allRatios = Object.values(myPersonalitiesRt)
      .concat(Object.values(mySpeciesRt));

    return allRatios.reduce((a, b) => a + b) / allRatios.length;
};

/**
 * The overall company happiness is the average happiness of a single employee.
 */
export const companyHappiness = (hired: Employee[]): number =>
  hired.map(employeeHappiness(hired)).reduce((a, b) => a + b) / hired.length;

/**
 * The more skilled the employees, the higher the income. But as long
 * as the skills are varied. The resulting number is arbitrary and
 * should be multiplied by a constant later to balance the game.
 */
export const dailyIncome = (hired: Employee[]) : number =>
  // TODO: add multiplyer constants
  hired.reduce((result, emp) => result + emp.skills.reduce((result2, skill) => result2 + skill.value, 0), 0);

/**
 * The sum of all salaries in the company.
 */
export const dailyExpenses = (hired: Employee[]) : number => 
  hired.reduce((result, emp) => result + emp.salary, 0);

/**
 * Calculates the daily profit based on the employees currently at the company. 
 * The skill determines the income, and the sum of salaries determines the 
 * expenses.
 */
export const dailyProfit = (hired: Employee[]): number => 
  dailyIncome(hired) - dailyExpenses(hired);
