import React from 'react';
import styles from './Day.module.css';

interface DayProps {
  currentDay: number;
}

const Day: React.FC<DayProps> = (props: DayProps) => (
  <div className={styles.Day} data-testid="Day">
    Day# {props.currentDay}
  </div>
);

export default Day;
