import { Candidate } from './models/candidate';
import { generateResume } from './resume_generator';
import { Personality } from './types/personality';
import { SkillName } from './types/skillname';
import { Species } from './types/species';

const skillNames = ['writer', 'manager', 'programmer'];
const speciesArray = ['sheep', 'chicken', 'cow', 'horse', 'pig', 'swan'];
const personalityArray = ['extrovert', 'introvert', 'thinker', 'feeler'];
const firstNames = [
    'Jill',
    'Joe',
    'Mike',
    'Rob',
    'Robert',
    'Bill',
    'Jack',
    'Sarah',
    'Amanda',
];
const lastNames = [
    'Smith',
    'Jackson',
    'Thompson',
    'Johnson',
    'Brown',
    'Davis',
    'Miller',
    'Jones',
    'Garcia',
];

export function generateCandidate(): Candidate {
    const species = speciesArray[getRandomInt(speciesArray.length)] as Species; 
    
    return {
        name: `${firstNames[getRandomInt(firstNames.length)]} ${
            lastNames[getRandomInt(lastNames.length)]
        }`,
        species: species,
        skills: [
            {
                name: skillNames[getRandomInt(skillNames.length)] as SkillName,
                value: getRandomInt(10),
            },
        ],
        personality: [
            personalityArray[
                getRandomInt(personalityArray.length)
            ] as Personality,
        ],
        resume: generateResume(),
        salary: getRandomInt(300)
    };
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}
