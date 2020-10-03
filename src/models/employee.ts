import { Personality } from '../types/personality';
import { Species } from '../types/species';
import { Skill } from './skill';

export interface Employee {
  name: string;
  picture: string;
  species: Species;
  skills: Skill[];
  personality: Personality[];
  salary: number;
}
