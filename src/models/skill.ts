import { SkillName } from '../types/skillname';

/**
 * Employees with higher skill values increase productivity.
 */
export interface Skill {
  name: SkillName;
  value: number;
}
