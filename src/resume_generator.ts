import { Resume } from './models/resume';

export const generateResume = (): Resume => ({
  resumeId: generateRandomId(),
});

export function generateRandomId() {
  return Math.floor(Math.random() * 100) + 1;
}
