import React from 'react';

import { Candidate } from '../../models/candidate';
import styles from './CandidateImage.module.css';

interface CandidateImageProps {
    candidate: Candidate;
}

const CandidateImage: React.FC<CandidateImageProps> = (
    props: CandidateImageProps
) => (
    <div className={styles.CandidateImageContainer}>
        <img
            className={styles.CandidateImage}
            src={require(`../../assets/images/${props.candidate.species}.png`)}
            alt={props.candidate.species}
        ></img>
    </div>
);

export default CandidateImage;
