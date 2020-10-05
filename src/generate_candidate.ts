import { Candidate } from './models/candidate';
import { generateResume } from './resume_generator';
import { Personality } from './types/personality';
import { SkillName } from './types/skillname';
import { Species } from './types/species';
import faker from 'faker';

const skillNames = ['writer', 'manager', 'programmer'];
const speciesArray = ['sheep', 'chicken', 'cow', 'horse', 'pig', 'swan'];
const personalityArray = ['extrovert', 'introvert', 'thinker', 'feeler'];

export function generateCandidate(): Candidate {
    const species = speciesArray[getRandomInt(speciesArray.length)] as Species;

    return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        species: species,
        skills: [
            {
                name: skillNames[getRandomInt(skillNames.length)] as SkillName,
                value: rand(0, 250),
            },
        ],
        personality: [
            personalityArray[
                getRandomInt(personalityArray.length)
            ] as Personality,
        ],
        resume: generateResume(),
        salary: rand(50, 300),
    };
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
