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
    return {
        name: `${firstNames[getRandomInt(firstNames.length)]} ${
            lastNames[getRandomInt(lastNames.length)]
        }`,
        picture: getGenericImage(),
        species: speciesArray[getRandomInt(speciesArray.length)] as Species,
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

function getGenericImage(): string {
    const genericImages = [
        'data:image/png;base64,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',
        'data:image/png;base64,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',
        'https://www.clipartqueen.com/image-files/animal-silhouette-mouse-2.jpg',
    ];

    return genericImages[getRandomInt(genericImages.length)];
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}
