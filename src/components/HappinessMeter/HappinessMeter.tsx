import React from 'react';
import styles from './HappinessMeter.module.scss';

interface HappinessMeterProps {
  happiness: number;
}

const HappinessMeter: React.FC<HappinessMeterProps> = (props: HappinessMeterProps) => (
  <div className={styles.HappinessMeter} data-testid="HappinessMeter">
    Company Happiness: {`${(props.happiness * 100).toFixed(2)}%`}
  </div>
);

export default HappinessMeter;
