
/**
 * Those are just examples. Feel free to add / remove at will. 
 * The hapiness algorithm doesn't care about particular names.
 */
export type SkillName = "writer" | "manager" | "programmer";


/**
 * Those are just examples. Feel free to add / remove at will. 
 * The hapiness algorithm doesn't care about particular names.
 */
export type Personality = "extrovert" | "introvert" | "thinker" | "feeler";


/**
 * Employees with higher skill values increase productivity.
 */
export interface Skill {
  name: SkillName;
  value: number;
}

/**
 * Again, just examples.
 */
export type Species = "lion" | "chicken" | "bear";

export interface Resume {
};

export interface Employee {
  name: string; 
  picture: string;
  species: Species;
  skills: Skill[];
  personality: Personality[];
  salary: number; // per day
  resume: Resume;
}


export interface State {
  hired: Employee[];
  currentResume: Employee;
  money: number;
  currentDay: number;
  companyHapiness: number;
  companyProductivity: number;
}

