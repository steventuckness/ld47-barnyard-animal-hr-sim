import React from 'react';
import ApproveButton from '../ApproveButton/ApproveButton';
import DenyButton from '../DenyButton/DenyButton';
import Employee from '../Employee/Employee';
import HappinessMeter from '../HappinessMeter/HappinessMeter';
import Resume from '../Resume/Resume';
import styles from './Game.module.css';

const Game: React.FC = () => (
  <div className={styles.Game} data-testid="Game">
    Game Component

    <Resume></Resume>
    <Employee></Employee>
    <ApproveButton></ApproveButton>
    <DenyButton></DenyButton>
    <HappinessMeter></HappinessMeter>
  </div>
);

export default Game;
