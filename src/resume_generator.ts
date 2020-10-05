import { Resume } from './models/resume';
import faker from 'faker';

const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const taskPhrases = [
    `I had to {verb} the {adjective} {noun}`,
    `Consistently demonstrated that I could {verb} the {adjective} {noun}`,
    `Worked with {name} to facilitate {adjective} {ingverb}`,
];

const schools = [
    `University of {adjective} {noun}`,
    `{state} school of {adjective} {noun}`,
];

const schoolPhrases = [
    `Always {verb} my {adjective} {noun} into the {noun}`,
    `Created a(n) {ingverb} {adjective} {noun}`,
];

const createExperience = () => {
    const count = rand(1, 3);
    const tasks = rand(1, 5);

    return Array.from({ length: count }).map(() => {
        return {
            date: faker.date.past(),
            company: faker.company.companyName(),
            position: faker.name.jobTitle(),
            tasks: Array.from({ length: tasks }).map(() => {
                return taskPhrases[rand(0, taskPhrases.length - 1)]
                    .replace(/\{verb\}/gi, faker.hacker.verb())
                    .replace(/\{noun\}/gi, () =>
                        faker.company.catchPhraseNoun()
                    )
                    .replace(/\{adjective\}/gi, faker.hacker.adjective())
                    .replace(/\{name\}/gi, faker.name.firstName())
                    .replace(/\{ingverb\}/gi, faker.hacker.ingverb());
            }),
        };
    });
};

const createEducation = () => {
    const count = rand(1, 3);
    const tasks = rand(1, 3);

    return Array.from({ length: count }).map(() => {
        return {
            date: faker.date.past(),
            school: schools[rand(0, schools.length - 1)]
                .replace('{state}', faker.address.state())
                .replace('{noun}', faker.company.bsNoun())
                .replace('{adjective}', faker.company.bsAdjective()),
            tasks: Array.from({ length: tasks }).map(() => {
                return schoolPhrases[rand(0, schoolPhrases.length - 1)]
                    .replace(/\{verb\}/gi, faker.hacker.verb())
                    .replace(/\{noun\}/gi, () =>
                        faker.company.catchPhraseNoun()
                    )
                    .replace(/\{adjective\}/gi, faker.hacker.adjective())
                    .replace(/\{ingverb\}/gi, faker.hacker.ingverb());
            }),
        };
    });
};

export const generateResume = (): Resume => {
    return {
        resumeId: generateRandomId(),
        experience: createExperience(),
        education: createEducation(),
    };
};

export function generateRandomId() {
    return Math.floor(Math.random() * 100) + 1;
}
