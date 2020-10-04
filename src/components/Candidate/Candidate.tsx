import React from 'react';
import { Candidate as CandidateModel } from '../../models/candidate';
import styles from './Candidate.module.css';

export interface CandidateProps {
    candidate: CandidateModel;
}

const Candidate: React.FC<CandidateProps> = (props: CandidateProps) => (
  <div className={styles.Candidate} data-testid="Candidate">
    <ul>
        <li>Candidate Name: {props.candidate.name}</li>
        <li>Candidate Salary: {props.candidate.salary}</li>
    </ul>
  </div>
);

export default Candidate;
