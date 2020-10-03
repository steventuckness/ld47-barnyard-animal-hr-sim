import { Personality } from '../types/personality';
import { Species } from '../types/species';
import { Skill } from './skill';
import { Resume } from './resume';

export interface Employee {
  name: string; 
  picture: string;
  species: Species;
  skills: Skill[];
  personality: Personality[];
  salary: number; // per day
  resume: Resume;
}
