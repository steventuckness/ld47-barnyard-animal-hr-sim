import React from 'react';
import { Candidate as CandidateModel } from '../../models/candidate';
import { Skill } from '../../models/skill';
import styles from './Candidate.module.css';

export interface CandidateProps {
  candidate: CandidateModel;
}

const Candidate: React.FC<CandidateProps> = (props: CandidateProps) => (
  <div className={styles.Candidate} data-testid="Candidate">
    <ul>
      <li><b>Candidate Name:</b> {props.candidate.name}</li>
      <li><b>Salary:</b> {props.candidate.salary}</li>
      <li><b>Personality:</b> {props.candidate.personality}</li>
      <li><b>Skills:</b> {printSkills(props.candidate.skills)}</li>
      <img width="200" src={require(`../../assets/images/${props.candidate.species}.png`)} alt=''></img>
    </ul>
  </div>
);

function printSkills(skills: Skill[]): string {
  return skills.map(skill => skill.name).join(',');
} 

export default Candidate;
