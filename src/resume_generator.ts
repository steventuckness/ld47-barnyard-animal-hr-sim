import { Resume } from './models/resume';
import faker from 'faker';

const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createExperience = () => {
    const count = rand(1, 3);

    return Array.from({ length: count }).map((_, i) => {
        return {
            date: faker.date.past(),
            company: faker.company.companyName(),
            position: faker.name.jobTitle()
        };
    });
};

const createEducation = () => {
    return [];
};

const createHonors = () => {
    return [];
};

export const generateResume = () => {
    return {
        resumeId: generateRandomId(),
        experience: createExperience(),
        education: createEducation(),
        honors: createHonors()
    };
};

export function generateRandomId() {
    return Math.floor(Math.random() * 100) + 1;
};
