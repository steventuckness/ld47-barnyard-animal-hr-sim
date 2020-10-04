import React from 'react';

import { generateCandidate } from '../../generate_candidate';
import { Candidate } from '../../models/candidate';
import ApproveButton from '../ApproveButton/ApproveButton';
import Day from '../Day/Day';
import DenyButton from '../DenyButton/DenyButton';
import Employee from '../Employee/Employee';
import HappinessMeter from '../HappinessMeter/HappinessMeter';
import Resume from '../Resume/Resume';
import styles from './Game.module.css';

type MyState = {
  money: number,
  currentDay: number,
  companyHapiness: number,
  companyProductivity: number,
  candidate: Candidate,
}

class Game extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      money: 0,
      currentDay: 0,
      companyHapiness: 0,
      companyProductivity: 0,
      candidate: generateCandidate(),
    }
  }

  render() {
    return (
      <div className={styles.Game} data-testid="Game">
        <Day currentDay={this.state.currentDay}></Day>
        <img width="100" src={this.state.candidate.picture}></img>
        <Resume></Resume>
        <Employee></Employee>
        <DenyButton resumeId={this.state.candidate.resume.resumeId}></DenyButton>
        <ApproveButton resumeId={this.state.candidate.resume.resumeId}></ApproveButton>
        <HappinessMeter></HappinessMeter>
      </div>
    );
  }

  componentDidMount(): void {
    setInterval(() => {
     this.goToNextDay();
    }, 1000);
  }

  goToNextDay(): void {
    this.setState({...this.state, currentDay: this.state.currentDay + 1});
    // TODO:
  }
};

export default Game;
