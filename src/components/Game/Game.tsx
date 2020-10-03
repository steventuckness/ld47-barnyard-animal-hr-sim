import React from 'react';
import ApproveButton from '../ApproveButton/ApproveButton';
import DenyButton from '../DenyButton/DenyButton';
import Employee from '../Employee/Employee';
import HappinessMeter from '../HappinessMeter/HappinessMeter';
import Resume from '../Resume/Resume';
import styles from './Game.module.css';
import { State } from '../../models/state';
import { generateResume } from "../../resume_generator";


const Game: React.FC = () => {
  const [setState, state] = React.useState<State>({
    hired: [],
    money: 0,
    currentDay: 0,
    companyHapiness: 0,
    companyProductivity: 0,
    currentResume: generateResume()
  });

  return (<div className={styles.Game} data-testid="Game">
    Game Component

    <Resume></Resume>
    <Employee></Employee>
    <ApproveButton></ApproveButton>
    <DenyButton></DenyButton>
    <HappinessMeter></HappinessMeter>
  </div>)
};

export default Game;
