import { Personality } from '../types/personality';
import { Species } from '../types/species';
import { Resume } from './resume';
import { Skill } from './skill';

export interface Candidate {
    name: string;
    species: Species;
    skills: Skill[];
    personality: Personality[];
    resume: Resume;
    salary: number;
}
