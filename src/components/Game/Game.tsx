import React from 'react';

import { generateCandidate } from '../../generate_candidate';
import { companyHappiness, dailyProfit } from '../../metrics';
import Employee from '../../models/employee';
import { Candidate as CandidateModel } from '../../models/candidate';
import ApproveButton from '../ApproveButton/ApproveButton';
import Candidate from '../Candidate/Candidate';
import Day from '../Day/Day';
import DenyButton from '../DenyButton/DenyButton';
import HappinessMeter from '../HappinessMeter/HappinessMeter';
import Resume from '../Resume/Resume';
import styles from './Game.module.css';

const dayIntervalInSeconds = 3;

type MyState = {
  money: number,
  currentDay: number,
  candidate: CandidateModel, // TODO:
  employees: Employee[]
}

class Game extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      money: 1000,
      currentDay: 0,
      candidate: generateCandidate(),
      employees: [
        {
        personality: ['extrovert'],
        salary: 128,
        skills: [
          { name: 'programmer', value: 32 }
        ],
        employeeId: 0,
        resume: { resumeId: 0},
        name: 'bill',
        species: 'sheep'
      } as Employee,
      {
        personality: ['extrovert'],
        salary: 100,
        skills: [
          { name: 'programmer', value: 48 }
        ],
        employeeId: 1,
        resume: { resumeId: 1},
        name: 'jill',
        species: 'swan'
      } as Employee
    ]
    }
  }

  render() {
    return (
      <div className={styles.Game} data-testid="Game">
        <Day currentDay={this.state.currentDay}></Day>
        Funds: ${this.state.money}
        <HappinessMeter happiness={companyHappiness(this.state.employees)}></HappinessMeter>
        <div className={styles.CandidateAndResume}>    
          <Candidate candidate={this.state.candidate}></Candidate>
          <Resume resume={this.state.candidate.resume}></Resume>  
        </div>
        <DenyButton resumeId={this.state.candidate.resume.resumeId}></DenyButton>
        <ApproveButton resumeId={this.state.candidate.resume.resumeId}></ApproveButton>
      </div>
    );
  }

  componentDidMount(): void {
    setInterval(() => {
     this.goToNextDay();
    }, dayIntervalInSeconds * 1000);
  }

  goToNextDay(): void {
    this.setState(
      {
        currentDay: this.state.currentDay + 1,
        money: this.state.money + dailyProfit(this.state.employees)
      });
  }
};

export default Game;
