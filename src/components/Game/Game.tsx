import React from 'react';

import { generateCandidate } from '../../generate_candidate';
import { State } from '../../models/state';
import ApproveButton from '../ApproveButton/ApproveButton';
import DenyButton from '../DenyButton/DenyButton';
import Employee from '../Employee/Employee';
import HappinessMeter from '../HappinessMeter/HappinessMeter';
import Resume from '../Resume/Resume';
import styles from './Game.module.css';

const Game: React.FC = () => {
    const [state, setState] = React.useState<State>({
        hired: [],
        money: 0,
        currentDay: 0,
        companyHapiness: 0,
        companyProductivity: 0,
        candidate: generateCandidate(),
    });

    return (
        <div className={styles.Game} data-testid="Game">
            <img width="100" src={state.candidate.picture}></img>
            <Resume resume={state.candidate.resume}/>
            <Employee></Employee>
            <DenyButton resumeId={state.candidate.resume.resumeId}></DenyButton>
            <ApproveButton
                resumeId={state.candidate.resume.resumeId}
            ></ApproveButton>
            <HappinessMeter></HappinessMeter>
        </div>
    );
};

export default Game;
